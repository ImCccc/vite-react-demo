/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Table, TableProps } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';

import styles from './index.module.less';

export type TableListColumns<T> = ColumnsType<T> & { timeFormat?: string }[];

export type TableListProps<T> = {
  // 表格列
  columns: TableListColumns<T>;
  // api
  service: (...args: any) => Promise<any>;
  // 筛选值
  filterValue?: Record<string, any>;
  // 用于暴露方法
  onRef?: any;
} & TableProps<any>;

// 暴露给父组件的方法
export type TableListRef = {
  refresh: () => void;
};

// 表格组件
const TableList: React.FC<TableListProps<any>> = ({
  columns,
  service,
  filterValue,
  onRef,
  ...props
}) => {
  // 表格数据
  const [data, setData] = useState<any[]>([]);
  // 数据总数
  const [total, setTotal] = useState<number>(0);
  // 当前页
  const [current, setCurrent] = useState<number>(1);
  // 每页条数
  const [pageSize, setPageSize] = useState<number>(10);
  // table的ref
  const tableRef = useRef<any>(null);
  // table的scroll
  const [scroll, setScroll] = useState<{ y?: number }>({});
  // 初始化时，修改table的scroll
  useEffect(() => {
    setScroll({
      y: document.body.clientHeight - tableRef.current?.offsetTop - 168,
    });
  }, []);

  // 获取表格数据API
  const getData = useCallback(
    async (page: number, _pageSize: number) => {
      const result = await service({
        page_index: page,
        page_size: _pageSize,
        ...filterValue,
      });
      if (result) {
        setData(result.list);
        setTotal(result.total);
        setCurrent(page);
        // throwError(result);
        localStorage.setItem('myCat', 'Tom');
        const cat = localStorage.getItem('myCat');
        console.log(cat);
        console.log(result);
        return result;
      }
    },
    [filterValue, service],
  );

  // 获取列表数据（初始化时 和 筛选值改变后触发）
  useEffect(() => {
    getData(1, pageSize);
  }, [getData, pageSize]);

  // 暴露刷新表格数据的方法
  useImperativeHandle(onRef, () => {
    return {
      refresh: () => getData(current, pageSize),
    };
  });

  // 接收分页的 props
  let paginationProps = {};
  if (props.pagination) {
    paginationProps = props.pagination;
  }

  // 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
  const onChange = async (_page: number, _pageSize: number) => {
    // 如果 pageSize 变了
    if (pageSize !== _pageSize) {
      // 返回第一页
      await getData(1, _pageSize);
      setCurrent(1);
      setPageSize(_pageSize);
      return;
    }
    await getData(_page, _pageSize);
    setCurrent(_page);
  };

  // 计算column
  const _column = useMemo(() => {
    for (const column of columns) {
      // 单元格内容根据宽度自动省略
      if (!column.ellipsis) {
        column.ellipsis = true;
      }
      // 格式化时间
      if (column.timeFormat) {
        column.render = (text) => (
          <span>{dayjs(text).format(column.timeFormat)}</span>
        );
      }
    }
    return columns;
  }, [columns]);

  return (
    <div className={styles.main}>
      <Table
        size="small"
        rowKey="id"
        scroll={scroll}
        {...props}
        pagination={{ pageSize, ...paginationProps, current, total, onChange }}
        ref={tableRef}
        dataSource={data}
        columns={_column}
      />
    </div>
  );
};

export default TableList;
