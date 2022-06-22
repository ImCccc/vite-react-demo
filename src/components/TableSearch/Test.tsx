import React from 'react';

import { Button } from 'antd';

import TableSearch from '@/components/TableSearch';

const fields = [
  {
    label: '输入框',
    defaultValue: '',
    placeholder: 'Input placeholder',
    key: 'xxx12222',
  },
  {
    label: '下拉框多选',
    defaultValue: ['value2'],
    type: 'Select',
    placeholder: 'Select placeholder',
    key: 'multiple',
    options: [
      {
        value: 'value1',
        label: '下拉框1',
      },
      {
        value: 'value2',
        label: '下拉框2',
      },
    ],
    compProps: {
      mode: 'multiple',
    },
  },
  {
    label: '下拉框',
    defaultValue: 'value2',
    type: 'Select',
    key: 'xxx2',
    placeholder: 'Select placeholder',
    options: [
      {
        value: 'value1',
        label: '下拉框1',
      },
      {
        value: 'value2',
        label: '下拉框2',
      },
    ],
  },
  {
    label: '日期',
    defaultValue: '2022-06-06',
    type: 'DatePicker',
    placeholder: 'DatePicker placeholder',
    key: 'xxx3',
  },
  {
    label: '日期范围',
    type: 'RangePicker',
    defaultValue: ['2022-06-06', '2022-06-07'],
    placeholder: ['Picker1', 'Picker2'],
    key: 'xxx4',
  },
];

const Comp: React.FC = () => {
  // 点击查询
  const onSearch = (data: unknown) => {
    console.log(data);
  };

  // 点击重置
  const onReset = (data: unknown) => {
    console.log(data);
  };

  const create = () => {
    console.log('点击新建');
  };

  // 其他按钮
  const renderButtons = () => {
    return <Button onClick={create}>新建</Button>;
  };

  return (
    <TableSearch
      fields={fields}
      onReset={onReset}
      onSearch={onSearch}
      renderButtons={renderButtons}
    />
  );
};

export default Comp;
