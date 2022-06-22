import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu, MenuProps } from 'antd';

import menuItems from '@/config/menu';

import styles from './index.module.less';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);
  const onClick: MenuProps['onClick'] = (e) => navigate(e.key);

  useEffect(() => {
    setDefaultSelectedKeys(location.pathname.split('/').slice(-1));
  }, [location]);

  return (
    <Menu
      mode="inline"
      onClick={onClick}
      items={menuItems}
      className={styles.menu}
      style={{ width: 200 }}
      selectedKeys={defaultSelectedKeys}
    />
  );
};

export default App;
