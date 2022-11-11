import {
  NavBar,
  Toast,
  // Swiper,
  // Space,
  // Button,
  // List,
  // Avatar,
  // Image,
  Tabs,
  Card,
} from 'antd-mobile';
import { useHistory } from 'umi';
import addIcon from '@/images/wishes/add-icon.png';
import addIconDefault from '@/images/wishes/add-icon-default.png';
import personIcon from '@/images/wishes/person-icon.png';
import cardIcon from '@/images/wishes/card-icon.png';
import commentIcon from '@/images/wishes/comment-icon.png';
import React, { useState } from 'react';

// import { tools } from '@/mock/home';

import './index.less';

export default () => {
  const history = useHistory();
  const [defaultActive, setDefaultActive] = useState<number | null>();

  const wishData = [
    {
      id: 1,
      title: '便签纸',
      content:
        '平时有好多事情，感觉记到电脑便签里看不见，看的时候还要打开，想要便签纸，这样可以写下来，贴在桌子上随时都可以看见～～',
      name: '匿名用户',
      comment: 2,
      approve: 118,
      click: false,
    },
    {
      id: 2,
      title: '湿厕纸',
      content: '没啥原因，就是想要！！',
      name: '匿名用户',
      comment: 2,
      approve: 118,
      click: false,
    },
    {
      id: 3,
      title: '电源线',
      content: '连接电脑显示屏',
      name: '匿名用户',
      comment: 2,
      approve: 118,
      click: false,
    },
    {
      id: 4,
      title: '彩色的笔',
      content: '没啥原因，就是想要！！',
      name: '匿名用户',
      comment: 2,
      approve: 118,
      click: false,
    },
  ];

  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.goBack(),
    });

  const handleAddClick = (id: number) => {
    console.log(id);
    setDefaultActive(id);
  };

  return (
    <div className="wishes-page">
      <NavBar onBack={back}>愿望池</NavBar>
      <Tabs className="wishes-tab">
        <Tabs.Tab title="全部" key="all">
          {wishData.map((item, index) => (
            <Card
              className="wishes-card"
              key={index}
              title={
                <div className="card-header">
                  <img src={cardIcon} alt="" />
                  <span>{item.title}</span>
                </div>
              }
            >
              <div className="card-content">{item.content}</div>
              <div className="card-footer">
                <div className="footer-left">
                  <img src={personIcon} alt="" />
                  <span>匿名用户</span>
                </div>
                <div
                  className="footer-add"
                  onClick={() => handleAddClick(item.id)}
                >
                  <img
                    src={item.id === defaultActive ? addIcon : addIconDefault}
                    alt=""
                  />
                  <span
                    style={{
                      color: item.id === defaultActive ? '#007E4E' : '#999999',
                    }}
                  >
                    {item.approve}
                  </span>
                </div>
                <div className="footer-comment">
                  <img src={commentIcon} alt="" />
                  <span style={{ color: '#999999' }}>{item.comment}</span>
                </div>
              </div>
            </Card>
          ))}
        </Tabs.Tab>

        <Tabs.Tab title="我的" key="mine">
          西红柿
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};
