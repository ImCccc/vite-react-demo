import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Dropdown, Menu } from 'antd';

import { LOGIN_PATH } from '@/config/constant';
import { clearLocalStorage } from '@/utils/storage';

import { IAMLogout } from '@/services/platform/IAM';
import { UserMgrUserInfo } from '@/services/platform/UserMgr';

import styles from './index.module.less';

const dropdownItems = [{ key: '1', label: '退出登录' }];

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [curUser, setCurUser] = useState<Partial<PLATFORM.platformIamUserInfo>>(
    { image_url: '', nick_name: '' },
  );

  useEffect(() => {
    UserMgrUserInfo({ user_id: '' }).then((data) => setCurUser(data.user_info));
  }, []);

  const logoutCallback = useCallback(() => {
    clearLocalStorage();
    navigate(LOGIN_PATH);
  }, [navigate]);

  const onMenuClick = useCallback(() => {
    IAMLogout({})
      .then(() => logoutCallback())
      .catch(() => logoutCallback());
  }, [logoutCallback]);

  return (
    <div className={styles.h_container}>
      <div
        className={styles.h_left}
        onClick={() => navigate({ pathname: '/' })}
      >
        <span className={styles.h_title}>盈合语音开放平台</span>
      </div>
      <Dropdown
        overlay={<Menu onClick={onMenuClick} items={dropdownItems} />}
        placement="bottom"
      >
        <div className={styles.h_right}>
          <Avatar
            size="small"
            className={styles.h_avatar}
            src={curUser.image_url}
            alt="avatar"
          />
          <span className={styles.h_name}>{curUser.nick_name}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default Header;
