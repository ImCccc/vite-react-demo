import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import menuItems from '@/config/menu';

import styles from './index.module.less';

const Comp: React.FC = () => {
  const location = useLocation();
  const [mennName, setMenuName] = useState<string | undefined>('');

  useEffect(() => {
    const key = location.pathname.split('/').slice(-1)[0];
    const meunItem = menuItems.find((item) => item.key === key)?.label;
    setMenuName(meunItem);
  }, [location]);

  return (
    <div className={styles.content}>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          <Link to="/">主页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>{mennName}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Outlet />
    </div>
  );
};

export default Comp;
