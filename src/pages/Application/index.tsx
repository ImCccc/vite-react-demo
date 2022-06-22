import { useParams } from 'react-router-dom';

import { Button } from 'antd';

const Comp: React.FC = () => {
  const params = useParams();
  return (
    <div className="commom-page">
      <span>1</span>
      应用信息: {params.id}
      <Button>123</Button>
    </div>
  );
};

export default Comp;
