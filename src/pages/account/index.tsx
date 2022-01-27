import { Avatar, Badge, DotLoading, List, NavBar, PullToRefresh, Space } from "antd-mobile";
import { useHistory } from "umi";
import {
  AlipayCircleFill,
  AntOutline,
  BankcardOutline,
  CheckShieldOutline,
  ContentOutline,
  CouponOutline,
  FileOutline,
  FireFill,
  GiftOutline,
  HandPayCircleOutline,
  HistogramOutline,
  KoubeiFill,
  MoreOutline,
  PayCircleOutline,
  PieOutline,
  ReceiptOutline,
  SetOutline,
  UserCircleOutline
} from "antd-mobile-icons";
import styles from "./index.less";
import { useState } from "react";
import { sleep } from "antd-mobile/es/utils/sleep";


export default () => {
  const history = useHistory();

  const listData = [
    [{
      icon: <AntOutline className="icon-1" />,
      title: <span>支付宝会员 &nbsp;&nbsp; <Badge content={<span> <AntOutline /> 钻石会员</span>} /></span>,
      extra: ""
    }, {
      icon: <CheckShieldOutline className="icon-1" />,
      title: "用户保护中心",
      extra: ""
    }, {
      icon: <CouponOutline className="icon-1" />,
      title: "商家服务",
      extra: ""
    }], [{
      icon: <FileOutline className="icon-2" />,
      title: "账单",
      extra: ""
    }, {
      icon: <PieOutline className="icon-1" />,
      title: "总资产",
      extra: <span className="extra-1">免费升级账户保障</span>
    }, {
      icon: <PayCircleOutline className="icon-1" />,
      title: "余额",
      extra: <span className="extraDefault">5.00</span>
    }, {
      icon: <HandPayCircleOutline className="icon-3" />,
      title: "余额宝",
      extra: ""
    }, {
      icon: <HistogramOutline className="icon-1" />,
      title: "花呗",
      extra: ""
    }, {
      icon: <ContentOutline className="icon-1" />,
      title: "余利宝",
      extra: ""
    }, {
      icon: <BankcardOutline className="icon-2" />,
      title: "银行卡",
      extra: ""
    }], [{
      icon: <AntOutline className="icon-1" />,
      title: "芝麻信用",
      extra: <Badge content={Badge.dot} style={{ "--top": "50%" }}><span
        className="extraDefault">有芝麻粒待积攒 &nbsp;&nbsp;</span></Badge>
    }, {
      icon: <AlipayCircleFill className="icon-1" />,
      title: "蚂蚁保",
      extra: ""
    }, {
      icon: <FireFill className="icon-3" />,
      title: "相互宝",
      extra: ""
    }, {
      icon: <ReceiptOutline className="icon-1" />,
      title: "网商贷",
      extra: ""
    }, {
      icon: <KoubeiFill className="icon-1" />,
      title: "网商银行",
      extra: ""
    }], [{
      icon: <GiftOutline className="icon-1" />,
      title: "我的公益",
      extra: ""
    }]

  ];

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px", color: "#ffffff" }}>
        <UserCircleOutline />
        <SetOutline />
      </Space>
    </div>
  );

  const getNextData = () => {
    let current = 1;
    const ret: string[] = [];
    for (let i = 0; i < 18; i++) {
      ret.unshift(current.toString());
      current++;
    }
    return ret;
  };

  const [data, setData] = useState(() => getNextData());

  return (
    <div className={styles.account}>
      <NavBar right={right} back={null} left={<span className={styles.leftTitle}>我的</span>} />
      <div className={styles.body}>
        <PullToRefresh
          renderText={status => {
            switch (status) {
              case "pulling":
                return <div className={styles.reshingWarp}>
                  <MoreOutline color="currentColor" />
                </div>;
              case "canRelease":
                return <div className={styles.reshingWarp}>
                  <div>松开刷新</div>
                  <MoreOutline color="currentColor" />
                </div>;
              case "refreshing":
                return <div className={styles.reshingWarp}>
                  <DotLoading color="currentColor" />
                </div>;
              case "complete":
                return "";
              default:
                return "";
            }
          }}
          onRefresh={async() => {
            await sleep(2000);
            setData([...getNextData(), ...data]);
          }}>
          <div className={styles.headerWarp}>
            <List>
              <List.Item
                prefix={<Avatar
                  src={"https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"} />}
                description="deserunt@ali.com"
                onClick={() => {
                }}
              >
                Novalee Spicer
              </List.Item>
            </List>
          </div>
          {
            listData.map((group, i) => {
              return <div className={styles.listGroupWarp} key={`list-group-${i}`}>
                <List mode="card">{
                  group.map((item, j) => (<List.Item key={`list-item-${i}-${j}`} prefix={item.icon} onClick={() => {
                  }} extra={item.extra}>
                    {item.title}
                  </List.Item>))
                }</List></div>;
            })
          }
        </PullToRefresh>
      </div>
    </div>
  );
}
