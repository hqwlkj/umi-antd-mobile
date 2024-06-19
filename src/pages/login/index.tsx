import React from 'react';
import './index.less';
import { Button } from 'antd-mobile';

export default () => {
  return (
    <div className="login-page-wrap">
      {' '}
      我是登录的页面 <Button color="primary">Login</Button>
    </div>
  );
};
