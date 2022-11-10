import { NavBar, Toast, Card } from 'antd-mobile';
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
      <NavBar onBack={back}>领取记录</NavBar>
      <Card
        title={<div style={{ fontWeight: 'normal' }}>清风纸巾</div>}
        // extra={<RightOutline />}
        // onBodyClick={onBodyClick}
        // onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
      >
        <div>领取数量</div>
        <div>发放人</div>
      </Card>
    </div>
  );
};
