import { useNavigate } from 'react-router-dom';

import img from './404.jpeg';

import styles from './index.module.less';

const Comp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <img onClick={() => navigate('/')} className={styles.img} src={img} />
    </div>
  );
};

export default Comp;
