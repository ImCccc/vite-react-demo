import React from 'react';

import { Select, SelectProps } from 'antd';

type DrySelectProps = SelectProps & {
  options: {
    value: string | number;
    label: string;
  }[];
};

const defaultProps = {
  allowClear: true,
  placeholder: '请选择',
  style: { width: '100%' },
};

const DrySelect: React.FC<DrySelectProps> = ({ options, ...props }) => {
  return (
    <Select {...defaultProps} {...props}>
      {options.map((v) => (
        <Select.Option key={v.value} value={v.value}>
          {v.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DrySelect;
