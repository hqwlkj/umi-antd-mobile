import styles from './index.less';
import { ErrorBlock, Space } from "antd-mobile";

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Account Page index</h1>
      <Space block direction='vertical' style={{ '--gap': '16px' }}>
        <ErrorBlock status='default' />
        <ErrorBlock status='disconnected' />
        <ErrorBlock status='empty' />
        <ErrorBlock status='busy' />
      </Space>
    </div>
  );
}
