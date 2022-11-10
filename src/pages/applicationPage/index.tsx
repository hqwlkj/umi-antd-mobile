import { NavBar, Toast, Form, Input } from 'antd-mobile';
import { useHistory } from 'umi';

export default () => {
  const history = useHistory();
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.goBack(),
    });

  return (
    <div>
      <NavBar onBack={back}>领取</NavBar>
      <Form layout="horizontal" mode="card">
        <Form.Header>卡片模式及分组</Form.Header>
        <Form.Item label="地区">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="领取物品">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Header />
        <Form.Item label="姓名">
          <Input placeholder="请填写" />
        </Form.Item>
        <Form.Item label="工号">
          <Input placeholder="请填写" />
        </Form.Item>
        <Form.Item label="部门">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Header />
      </Form>
    </div>
  );
};
