import {
  NavBar,
  Toast,
  TextArea,
  Form,
  Input,
  Space,
  Button,
  Popup,
  Radio,
} from 'antd-mobile';
import { useHistory } from 'umi';
import React, { useState } from 'react';

export default () => {
  const history = useHistory();
  const [visible, setVisible] = useState(true);
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.goBack(),
    });

  return (
    <div>
      <NavBar onBack={back}>提需求</NavBar>
      <Form layout="horizontal" mode="card">
        <Form.Item label="姓名">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="需求物品">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Header />
        <Form.Item label="申请原因">
          <TextArea
            placeholder="请为你的申请填写原因，更有机会获得老板的批准哦～"
            rows={5}
          />
        </Form.Item>
        <Form.Header />

        <Space wrap>
          <Button block size="large" color="success">
            提交
          </Button>
        </Space>
      </Form>
    </div>
  );
};
