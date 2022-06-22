import { LoadingOutlined } from '@ant-design/icons';

import styles from './index.module.less';

type LoadingProps = {
  style?: React.CSSProperties;
};

const Comp: React.FC<LoadingProps> = ({ style }) => (
  <div className={styles.wrap}>
    <LoadingOutlined style={style || { fontSize: '60px', color: '#08c' }} />
  </div>
);

export default Comp;
