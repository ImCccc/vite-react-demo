import React, { useRef, useState } from 'react';

import { Space } from 'antd';

import TableList, {
  TableListColumns,
  TableListRef,
} from '@/components/TableList';

import { BroadcastServicePage } from '@/services/smzx/BroadcastService';

// 表格列
const columns: TableListColumns<SMZX.smzxBroadcast> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // 时间格式
    // timeFormat: 'yyyy-mm-dd',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>edit</a>
        <a onClick={() => console.log(text, record.content)}>Delete</a>
      </Space>
    ),
  },
];

const Comp: React.FC = () => {
  // 筛选值
  const [filterValue] = useState<Record<string, unknown>>({});
  // TableList的ref
  const tableRef = useRef<TableListRef>();
  // 刷新table，重新获取数据
  tableRef.current?.refresh();

  return (
    <TableList
      service={BroadcastServicePage}
      columns={columns}
      filterValue={filterValue}
      pagination={{ showQuickJumper: true }}
      onRef="tableRef"
    />
  );
};

export default Comp;
