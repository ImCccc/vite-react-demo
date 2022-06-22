import { Button, Input, message } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';

const chatData: any = [
  {
    id: 1,
    content: '介绍一下盈合',
    user: 'me',
  },
  {
    id: 2,
    content:
      '盈合机器人是一家服务型机器人和智能制造机器人研发商，致力于研发城市治理、医疗、物流、应急管理产业等领域的机器人应用，助力国内智能制造的发展。',
    user: 'robot',
  },
];

const SandBox: React.FC = () => {
  const [data, setData] = useState<any>(chatData);
  const [content, setContent] = useState<string>('');

  // 输入框改变
  const onChange = (e: any) => {
    setContent(e.target.value);
  };

  // 发送
  const send = () => {
    if (content.replace(/\s+|[\r\n]/g, '').length === 0) {
      message.warning('输入框不能为空');
      return;
    }

    setData((oldData: any) => [
      ...oldData,
      {
        id: data.length + 1,
        content: content,
        user: 'me',
      },
    ]);

    // 清空输入框
    setContent('');
  };

  return (
    <div className={styles.box}>
      <div className={styles.chatBox}>
        {/* 聊天窗口 */}
        <div className={styles.chatBoxMain}>
          {data.map((item: any) => {
            if (item.user === 'me') {
              return (
                // 我发的信息
                <div className={styles.chat} key={item.id} style={{ justifyContent: 'flex-end' }}>
                  <div className={styles.chatMain} style={{ background: 'rgba(24,144,255, 0.2)' }}>
                    {item.content}
                  </div>
                </div>
              );
            } else {
              return (
                // 对方发的信息
                <div className={styles.chat} key={item.id}>
                  <span className={styles.chatMain}>{item.content}</span>
                </div>
              );
            }
          })}
        </div>
        {/* 输入窗口 */}
        <Input.Group className={styles.inputGroup}>
          <Input.TextArea
            className={styles.textArea}
            value={content}
            placeholder="请输入对话"
            onChange={onChange}
          />
          <Button className={styles.button} type="primary" onClick={send}>
            发送
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default SandBox;
