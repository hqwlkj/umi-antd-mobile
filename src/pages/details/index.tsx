import { TabBarContext } from '@/layouts';
import { history } from '@umijs/max';
import { NavBar, ProgressCircle, Result, Space, Toast } from 'antd-mobile';
import { useContext } from 'react';

export default () => {
  const todo = useContext(TabBarContext);
  const back = () => {
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.back(),
    });
  };

  return (
    <div>
      <NavBar back="返回" onBack={back}>
        详情页面
      </NavBar>
      <Result
        status="success"
        title="操作成功"
        description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
      />
      <Space justify={'center'} block style={{ '--gap': '24px' }}>
        <div style={{ fontSize: 22 }}>
          待办数：{todo.items.todoBadge || '0'}
        </div>
        <div style={{ fontSize: 22 }}>
          消息数：{todo.items.messageBadge || '0'}
        </div>
      </Space>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="">指定线条宽度</div>
        <Space style={{ '--gap': '24px', width: '100%' }}>
          <ProgressCircle percent={75} style={{ '--track-width': '2px' }}>
            75%
          </ProgressCircle>
          <ProgressCircle percent={75} style={{ '--track-width': '3px' }}>
            75%
          </ProgressCircle>
          <ProgressCircle percent={75} style={{ '--track-width': '4px' }}>
            75%
          </ProgressCircle>
        </Space>
      </div>
    </div>
  );
};
