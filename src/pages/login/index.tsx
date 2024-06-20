import React from 'react';
import { Button, ErrorBlock, Toast } from 'antd-mobile';
import './index.less';

const LoginPage = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="login-page-wrap">
      {' '}
      <div>
        <ErrorBlock status="disconnected" />
      </div>
      我是登录的页面 {count}
      <div>
        <Button
          color="primary"
          onClick={() => {
            setCount(2222);
          }}
        >
          Login
        </Button>
      </div>
      <Button
        onClick={() => {
          Toast.show({
            content: 'Hello World, This is a long text',
            afterClose: () => {
              console.log('after');
            },
          });
        }}
      >
        轻提示
      </Button>
    </div>
  );
};

export default LoginPage;
