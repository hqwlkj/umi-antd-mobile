import { Button, Space, Toast } from "antd-mobile";
import { useHistory } from "umi";
import { UploadOutline } from "antd-mobile-icons";
import styles from './index.less';

export default function IndexPage() {
  const history = useHistory();
  return (
    <div>
      <h1 className={styles.title}>Home Page index</h1>
      <Button>3333</Button>

      <Button onClick={()=> history.push('/test')}>点我去详情页</Button>
      <div>
        <Space wrap align='center'>
          <Button size='mini' color='primary'>
            Mini
          </Button>
          <Button size='small' color='primary'>
            Small
          </Button>
          <Button size='middle' color='primary'>
            Middle
          </Button>
          <Button size='large' color='primary'>
            Large
          </Button>
        </Space>
      </div>

      <div>
        <Space wrap>
          <Button
            onClick={() =>
              Toast.show({
                icon: 'success',
                content: '保存成功',
              })
            }
          >
            成功
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'fail',
                content: '名称已存在',
              })
            }}
          >
            失败
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}
          >
            加载中
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                content: '上传中',
                icon: <UploadOutline />,
              })
            }}
          >
            自定义图标
          </Button>
        </Space>
      </div>
    </div>
  );
}
