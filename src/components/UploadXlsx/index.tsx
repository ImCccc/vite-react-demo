import * as xlsx from 'xlsx';
import type { UploadProps } from 'antd';
import { Upload, Button, message } from 'antd';

export type UploadXlsxProps = UploadProps & {
  uploadText?: string;
  showTips?: boolean;
  service?: (params?: any) => Promise<any>;
  formatData?: (arg0: any) => any;
  onSuccess?: () => void;
};

/** 表格组件 */
const UploadXlsx: React.FC<UploadXlsxProps> = ({
  onSuccess,
  formatData,
  uploadText,
  showTips,
  service,
  children,
  ...props
}) => {
  const _props: UploadProps = {
    maxCount: 1,
    name: 'file',
    accept: '.xlsx,',
    showUploadList: false,
    customRequest(info) {
      const filereder = new FileReader();
      filereder.onload = async (e) => {
        const workbook = xlsx.read(e.target?.result, { type: 'binary' });
        const sheetNames = workbook.SheetNames;
        const sheet1 = workbook.Sheets[sheetNames[0]];

        let params = { list: xlsx.utils.sheet_to_json(sheet1) };
        if (formatData) params = formatData(params);
        if (service) {
          await service(params);
          if (showTips !== false) message.success('导入成功!');
        }

        if (onSuccess) onSuccess();
      };
      filereder.readAsBinaryString(info.file as Blob);
    },
    ...props,
  };

  return <Upload {..._props}>{children || <Button>{uploadText || '导入'}</Button>}</Upload>;
};

export default UploadXlsx;
