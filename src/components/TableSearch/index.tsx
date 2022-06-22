import { useEffect, useRef, useState } from 'react';

import { Button, DatePicker, Input, Select } from 'antd';
import classNames from 'classnames';
import moment from 'moment';

import styles from './index.module.less';

export type OptionsProps = {
  value: string | number;
  label: string;
}[];

export type CompTypes = 'Input' | 'Select' | 'DatePicker' | 'RangePicker';

type RangeValue = [moment.Moment | null, moment.Moment | RangeValue] | null;

export type FieldsItemProps = {
  label: string;
  key: string;
  type?: string;
  defaultValue?: any;
  placeholder?: string | string[];
  options?: OptionsProps;
  compProps?: Record<string, any>;
};

export type FieldsProps = FieldsItemProps[];
export type OnChangeProps = (key: string, value: any, values?: any) => void;
export type OnSearchProps = (data: Record<string, any>) => void;

export type CompProps = {
  fields: FieldsProps; // 字段配置
  onChange?: OnChangeProps; // 字段值发生变化调用该方法
  onSearch?: OnSearchProps; // 点击查询调用该方法
  onReset?: OnSearchProps; // 点击重置调用该方法
  renderButtons?: () => JSX.Element; // 除了重置, 查询之外的其他按钮
  className?: string;
};

const Search: React.FC<CompProps> = ({
  className,
  fields,
  onChange,
  onSearch,
  onReset,
  renderButtons,
}) => {
  const [values, setValues] = useState<Record<string, any>>({});

  const defaultValues = useRef<any>({});

  // 初始化重置的参数
  useEffect(() => {
    defaultValues.current = fields.reduce((data: any, cur) => {
      const { type, key, compProps } = cur;
      if (type === 'DatePicker' || type === 'RangePicker') {
        data[key] = null;
      } else if (compProps && compProps.mode === 'multiple') {
        data[key] = [];
      } else {
        data[key] = '';
      }
      return data;
    }, {});
  }, [fields]);

  // 根据 fields 的, 初始化组件的value
  useEffect(() => {
    const initData = fields.reduce((data: any, cur) => {
      const { defaultValue, type, key } = cur;

      if (type === 'DatePicker') {
        data[key] = defaultValue
          ? moment(new Date(defaultValue), 'YYYY-MM-DD')
          : null;
        return data;
      }

      if (type === 'RangePicker') {
        if (defaultValue && defaultValue.length === 2) {
          data[key] = [
            moment(new Date(defaultValue[0]), 'YYYY-MM-DD'),
            moment(new Date(defaultValue[1]), 'YYYY-MM-DD'),
          ];
        } else {
          data[key] = [];
        }

        return data;
      }
      data[key] = defaultValue === 0 ? 0 : defaultValue || '';
      return data;
    }, {});

    setValues(initData);
  }, [fields]);

  // 输入框输入, 下拉框选中后触发
  const _onChange = (value: string | number, key: string) => {
    const data = { ...values, [key]: value };
    setValues(data);
    if (!onChange) return;
    onChange(key, value);
  };

  // 日期选择器, 选中后触发
  const _onDateChange = (date: moment.Moment | null, key: string) => {
    const data = { ...values, [key]: date };
    setValues(data);
    if (!onChange) return;
    onChange(key, date && date.valueOf());
  };

  // 日期范围选择器, 选中后触发
  const _onRangeChange = (date: RangeValue, key: string) => {
    const data = { ...values, [key]: date };
    setValues(data);
    if (!onChange) return;

    const value: any[] = [];
    if (date) {
      value[0] = date[0] ? date[0].valueOf() : null;
      value[1] = date[1] ? date[1].valueOf() : null;
    }
    onChange(key, value);
  };

  // 点击查询
  const _onSearch = () => {
    const searchData = Object.keys(values).reduce((data, key) => {
      const value = values[key];
      if (value instanceof moment) {
        // 日期
        data[key] = (value as moment.Moment).valueOf();
      } else if (value instanceof Array && value[0] instanceof moment) {
        // 日期范围
        data[key] = [
          (value[0] as moment.Moment).valueOf(),
          (value[1] as moment.Moment).valueOf(),
        ];
      } else if (value instanceof Array) {
        // 多选
        if (value[0] !== undefined) data[key] = [...value];
      } else if (value || value === 0) {
        // 其他
        data[key] = value;
      }
      return data;
    }, {});

    if (!onSearch) return;
    onSearch(searchData);
  };

  const _getComp = (field: FieldsItemProps) => {
    const { type, key, placeholder, options, compProps } = field;

    const props: Record<string, any> = {
      ...compProps,
      placeholder,
      allowClear: true,
      value: values[key],
      className: styles.comp,
    };

    if (type === 'RangePicker') {
      return (
        <DatePicker.RangePicker
          {...props}
          className={styles.range}
          onChange={(date) => _onRangeChange(date, key)}
        />
      );
    }

    if (type === 'DatePicker') {
      return (
        <DatePicker {...props} onChange={(date) => _onDateChange(date, key)} />
      );
    }

    if (type === 'Select') {
      return (
        <Select {...props} onChange={(value) => _onChange(value, key)}>
          {options?.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      );
    }

    return (
      <Input
        {...props}
        onPressEnter={_onSearch}
        onChange={(e) => _onChange(e.target.value, key)}
      />
    );
  };

  // 点击重置
  const _onReset = () => {
    setValues({ ...defaultValues.current });
    if (!onReset) return;
    onReset({ ...defaultValues.current });
  };

  return (
    <div className={classNames(styles.layout, className)}>
      {fields.map((field) => {
        return (
          <div key={field.key} className={styles.item}>
            {field.label && (
              <span className={styles.label}>{field.label}:</span>
            )}
            {_getComp(field)}
          </div>
        );
      })}
      <div className={styles.buttonwrap}>
        {onSearch && (
          <Button type="primary" onClick={_onSearch}>
            查询
          </Button>
        )}
        {onReset && <Button onClick={_onReset}>重置</Button>}
        {renderButtons && renderButtons()}
      </div>
    </div>
  );
};

export default Search;
