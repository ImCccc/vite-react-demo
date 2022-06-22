import { Button } from 'antd';
import type { FormItemListProps, ImperativeHandleProps } from '@/components/ModalForm';
import ModalForm from '@/components/ModalForm';
import React, { useRef } from 'react';

const formItemList: FormItemListProps = [
  {
    name: 'k2',
    label: '任务名称',
    rules: [{ required: true, message: '请输入任务名称!' }],
    props: {
      placeholder: '请输入任务名称',
    },
  },

  {
    name: 'k1',
    type: 'DatePicker',
    label: '日期',
    rules: [{ required: true, message: '请选择日期!' }],
    props: {
      placeholder: '请选择日期',
    },
  },

  {
    name: 'k3',
    type: 'Select',
    label: '任务分类',
    rules: [{ required: true, message: '请选选择任务分类!' }],
    props: {
      options: [
        {
          value: 1,
          label: 'xx1',
        },
        {
          value: 2,
          label: 'xx2',
        },
      ],
      placeholder: '请选选择任务分类',
      mode: false,
    },
  },
];

const Comp: React.FC = () => {
  const modalFormRef = useRef<ImperativeHandleProps>(null);

  const onSubmit = async (data: any) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  };

  return (
    <div style={{ padding: '30px' }}>
      <Button type="primary" onClick={() => modalFormRef.current?.showModal()}>
        新增
      </Button>
      <ModalForm
        title="新增设备"
        ref={modalFormRef}
        onSubmit={onSubmit}
        formProps={{ labelCol: { span: 4 } }}
        initialValues={{ name: 'xxx', code: 2 }}
        formItemList={formItemList}
      />
    </div>
  );
};

export default Comp;
