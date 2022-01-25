import styles from './index.less';
import { Button, ErrorBlock, Space } from "antd-mobile";
import { useHistory } from "umi";

export default () => {
  const history = useHistory();
  return (
    <div>
      <h1 className={styles.title}>Personal Center Page index</h1>
      <Space block direction='vertical' style={{ '--gap': '16px' }}>
        <ErrorBlock status='default' />
        <ErrorBlock status='disconnected' />
        <ErrorBlock status='empty' />
        <ErrorBlock status='busy' />
      </Space>
      <Button onClick={()=> history.push('/test')}>点我去详情页</Button>
    </div>
  );
}
