import { NavBar, Toast, Card } from 'antd-mobile';
import { useHistory } from 'umi';
import cardIcon from '@/images/wishes/card-icon.png';

import './index.less';

export default () => {
  const history = useHistory();
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.goBack(),
    });

  const historyData = [
    {
      date: '2022-11-09',
      data: [
        {
          id: 1,
          title: '清风纸巾',
          date: '2022-11-09 10:45:09',
          account: '1 包',
          admin: '李土豆',
        },
        {
          id: 2,
          title: '小日子过的不错牌黑笔',
          date: '2022-11-09 10:45:09',
          account: '1 支',
          admin: '李土豆',
        },
      ],
    },
    {
      date: '2022-10-30',
      data: [
        {
          id: 1,
          title: '清风纸巾',
          date: '2022-11-09 10:45:09',
          account: '1 包',
          admin: '李土豆',
        },
        {
          id: 2,
          title: '小日子过的不错牌黑笔',
          date: '2022-11-09 10:45:09',
          account: '1 支',
          admin: '李土豆',
        },
      ],
    },
  ];

  return (
    <div className="history-page">
      <NavBar className="history-nav-bar" onBack={back}>
        领取记录
      </NavBar>
      {historyData.map((item1, index1) => (
        <div key={index1} className="date-item">
          <span className="date-item-title">{item1.date}</span>
          {item1.data.map((item2, index2) => (
            <Card
              className="things-card"
              key={index2}
              title={
                <div className="card-header">
                  <div>
                    <img src={cardIcon} alt="" />
                    <span className="card-title">{item2.title}</span>
                  </div>

                  <span className="card-date"> {item2.date}</span>
                </div>
              }
              // style={{ borderRadius: '6px' }}
            >
              <div>领取数量: {item2.account}</div>
              <div className="admin-wrapper">发放人: {item2.admin}</div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
