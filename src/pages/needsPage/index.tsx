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

import './index.less';

export default () => {
  const history = useHistory();
  const [visible, setVisible] = useState(true);
  const back = () => {
    history.goBack();
  };

  return (
    <div className="needs-page">
      <NavBar className="needs-nav-bar" onBack={back}>
        提需求
      </NavBar>
      <div className="needs-main">
        <Form layout="horizontal" mode="card" className="needs-form">
          <Form.Item label="姓名">
            <Input placeholder="请填写" />
          </Form.Item>
          <Form.Item label="需求物品">
            <Input placeholder="请填写" />
          </Form.Item>

          <Form.Item label="申请原因">
            <TextArea
              placeholder="请为你的申请填写原因，更有机会获得老板的批准哦～"
              rows={5}
            />
          </Form.Item>
          <Form.Header />
        </Form>
        <Space className="btn-wrapper">
          <Button block size="large" className="needs-button">
            提交
          </Button>
        </Space>
      </div>
    </div>
  );
};
