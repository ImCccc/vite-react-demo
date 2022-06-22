import UploadXlsx from '@/components/UploadXlsx';
import { AgvDeviceServiceImport } from '@/services/smzx/AgvDeviceService';

const Comp: React.FC = () => {
  // 导入成功回调
  const onSuccess = () => {};

  // 对导入的数据2次处理, 返回的值,会直接作为导入接口的参数
  const formatData = (list: any[]) => {
    return list;
  };

  return (
    <>
      <UploadXlsx
        uploadText="导入按钮文字"
        service={AgvDeviceServiceImport}
        formatData={formatData}
        onSuccess={onSuccess}
      />
    </>
  );
};

export default Comp;
