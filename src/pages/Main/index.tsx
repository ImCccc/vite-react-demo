import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TableList from '@/components/TableList';
import TableSearch from '@/components/TableSearch';
import Header from '@/pages/Layout/Header';

import { AgvDeviceServicePage } from '@/services/smzx/AgvDeviceService';

import styles from './index.module.less';

const fields = [
  {
    label: '',
    key: 'device_name',
    placeholder: '请输入设备名称搜索',
  },
];

const columns = [
  {
    title: '应用名称',
    dataIndex: 'device_id',
  },
  {
    title: '应用标识',
    dataIndex: 'device_name',
  },
  {
    title: '应用分类',
    dataIndex: 'product_id',
  },
  {
    title: '创建时间',
    dataIndex: 'product_name',
  },
  {
    title: '应用状态',
    dataIndex: 'is_online',
    render: (online: boolean) => <span>{online ? '在线' : '离线'}</span>,
  },
];

type ParamsProps = {
  device_name?: string;
};

const Comp: React.FC = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState<ParamsProps>({});

  // 点击查询
  const onSearch = (data: ParamsProps) => {
    setParams({ ...data });
  };

  const onRowClick = (record: SMZX.smzxAgvDevice) => {
    navigate(`/main/${record.device_id}/application`);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <TableSearch
          className="margin-space"
          fields={fields}
          onSearch={onSearch}
        />
        <TableList
          rowKey="device_id"
          columns={columns}
          filterValue={params}
          onRow={(record) => ({
            onClick: () => onRowClick(record),
          })}
          service={AgvDeviceServicePage}
          scroll={{ y: document.body.clientHeight - (48 + 180) }}
        />
      </div>
    </>
  );
};

export default Comp;
