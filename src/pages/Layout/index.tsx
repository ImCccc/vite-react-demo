import Content from '@/pages/Layout/Content';
import Header from '@/pages/Layout/Header';
import Sider from '@/pages/Layout/Sider';

import styles from './index.module.less';

const App: React.FC = () => (
  <div className={styles.page}>
    <Header />
    <div className={styles.main}>
      <Sider />
      <Content />
    </div>
  </div>
);

export default App;
