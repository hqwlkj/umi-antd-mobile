import { NavBar, Card } from 'antd-mobile';
import { useHistory } from 'umi';
import addIcon from '@/images/wishes/add-icon.png';
import addIconDefault from '@/images/wishes/add-icon-default.png';
import personIcon from '@/images/wishes/person-icon.png';
import cardIcon from '@/images/wishes/card-icon.png';
import commentIcon from '@/images/wishes/comment-icon.png';
import personWang from '@/images/wishes/person-wang.png';

import React, { useState } from 'react';

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
  ];

  const commentData = [
    {
      id: 1,
      img: personIcon,
      name: '匿名用户',
      date: '2022-11-01 12:11:11',
      comment: '我也超级想要呀，加一加一！！！',
    },
    {
      id: 2,
      img: personWang,
      name: '王大厨',
      date: '2022-11-01 13:30:11',
      comment: '哈哈哈哈这个不错，这个可以有～',
    },
  ];

  const back = () => {
    history.goBack();
  };

  const handleAddClick = (id: number) => {
    console.log(id);
    setDefaultActive(id);
  };

  return (
    <div className="wishes-detail">
      <NavBar className="wishes-detail-header" onBack={back}>
        愿望池
      </NavBar>
      {wishData.map((item, index) => (
        <Card
          className="wishes-card"
          key={index}
          title={
            <div className="card-header">
              <img src={cardIcon} alt="" />
              <span>便签纸</span>
            </div>
          }
        >
          <div className="card-content">
            平时有好多事情，感觉记到电脑便签里看不见，看的时候还要打开，想要便签纸，这样可以写下来，贴在桌子上随时都可以看见～～
          </div>
          <div className="card-footer">
            <div className="footer-left">
              <img src={personIcon} alt="" />
              <span>匿名用户</span>
            </div>
            <div className="footer-add" onClick={() => handleAddClick(item.id)}>
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
              <span style={{ color: '#999999' }}>2</span>
            </div>
          </div>
        </Card>
      ))}
      <Card
        className="wishes-card"
        title={
          <div className="card-header">
            <span>评论 (2)</span>
          </div>
        }
      >
        {commentData.map((item) => (
          <div className="comment-item" key={item.id}>
            <div className="comment-title">
              <div>
                <img src={item.img} alt="" />
                <span className="name">{item.name}</span>
              </div>

              <span className="date">{item.date}</span>
            </div>
            <div className="comment">{item.comment}</div>
          </div>
        ))}
      </Card>
    </div>
  );
};
