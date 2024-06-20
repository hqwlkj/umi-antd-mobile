import { history } from '@umijs/max';
import {
  Button,
  Grid,
  Popover,
  Space,
  Swiper,
  Switch,
  Toast,
} from 'antd-mobile';
import {
  AddCircleOutline,
  AntOutline,
  DownOutline,
  FolderOutline,
  ReceivePaymentOutline,
  RightOutline,
  ScanningOutline,
  SearchOutline,
  TravelOutline,
  UploadOutline,
  UserContactOutline,
} from 'antd-mobile-icons';
import { useLayoutEffect, useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={styles.content}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));
  const [enableDarkMode, setEnableDarkMode] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      enableDarkMode ? 'dark' : 'light',
    );
  }, [enableDarkMode]);

  return (
    <div className={styles.homeWarp}>
      <div className={styles.header}>
        <Grid columns={12}>
          <Grid.Item span={2}>
            <div className={styles.location}>
              <div className={styles.locationName}>
                重庆 &nbsp;
                <DownOutline />
              </div>
              <div className={styles.weather}>多云 9℃</div>
            </div>
          </Grid.Item>
          <Grid.Item span={8}>
            <div className={styles.searchBarWarp}>
              <SearchOutline className={styles.icon} />
              <div className={styles.content}>
                <Swiper
                  direction="vertical"
                  style={{ '--height': '30px' }}
                  autoplay={true}
                  loop={true}
                  indicator={() => null}
                >
                  <Swiper.Item>
                    <div className={styles.verticalContent}>
                      重庆市第九人民医院
                    </div>
                  </Swiper.Item>
                  <Swiper.Item>
                    <div className={styles.verticalContent}>
                      重庆市卫健委发布重要通知
                    </div>
                  </Swiper.Item>
                </Swiper>
              </div>
              <div className={styles.text}>搜索</div>
            </div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles.expand}>
              <Popover
                content={
                  <div className={styles.expandMenuWarp}>
                    <div className={styles.menuItem}>
                      <ScanningOutline className={styles.icon} />
                      <div className={styles.menuItemInner}>扫一扫</div>
                    </div>
                    <div className={styles.menuItem}>
                      <ReceivePaymentOutline className={styles.icon} />
                      <div className={styles.menuItemInner}>二维码收款</div>
                    </div>
                    <div className={styles.menuItem}>
                      <UserContactOutline className={styles.icon} />
                      <div className={styles.menuItemInner}>我的名片</div>
                    </div>
                    <div className={styles.menuItem}>
                      <AntOutline className={styles.icon} />
                      <div className={styles.menuItemInner}>智能助理</div>
                    </div>
                  </div>
                }
                placement="topRight"
                mode="dark"
                trigger="click"
              >
                <AddCircleOutline />
              </Popover>
            </div>
          </Grid.Item>
        </Grid>
        <Grid columns={4}>
          <Grid.Item className={styles.iconWarp}>
            <ScanningOutline />
            <div className={styles.iconText}>扫一扫</div>
          </Grid.Item>
          <Grid.Item className={styles.iconWarp}>
            <ReceivePaymentOutline />
            <div className={styles.iconText}>收付款</div>
          </Grid.Item>
          <Grid.Item className={styles.iconWarp}>
            <TravelOutline />
            <div className={styles.iconText}>出行</div>
          </Grid.Item>
          <Grid.Item className={styles.iconWarp}>
            <FolderOutline />
            <div className={styles.iconText}>卡包</div>
          </Grid.Item>
        </Grid>
      </div>
      <div className={styles.ribbonWarp}>
        <Grid columns={5}>
          {[
            '饿了么',
            '消费金',
            '市民中心',
            '芭芭农场',
            '蚂蚁森林',
            '转账',
            '汇率换算',
            '余额宝',
            '蚂蚁新村',
            '生活缴费',
            '花呗',
            '健康码',
            '运动',
            '我的小程序',
            '更多',
          ].map((text, index) => (
            <Grid.Item
              className={styles.iconWarp}
              key={`item-${index}`}
              onClick={() => history.push('/detail')}
            >
              <ScanningOutline />
              <div className={styles.iconText}>{text}</div>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div className={styles.messageWarp}>
        <div className={styles.messageList}>
          <div className={styles.messageItem}>
            余额宝：余额宝收益到账啦 <span>7分钟前</span>
          </div>
          <div className={styles.messageItem}>
            蚂蚁财富：你的基金收益已更新 <span>15分钟前</span>
          </div>
        </div>
        <div className={styles.messageArrow}>
          <RightOutline />
        </div>
      </div>
      <div className={styles.adWarp}>
        <Swiper autoplay={true} loop={true}>
          {items}
        </Swiper>
      </div>
      <div>
        <Space wrap>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'success',
                content: '保存成功',
              });
            }}
          >
            成功
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'fail',
                content: '名称已存在',
              });
            }}
          >
            失败
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              });
            }}
          >
            加载中
          </Button>
          <Button
            onClick={() => {
              Toast.show({
                content: '上传中',
                icon: <UploadOutline />,
              });
            }}
          >
            自定义图标
          </Button>
        </Space>
      </div>
      <div>
        <Space align="center">
          <div>Dark Mode</div>
          <Switch
            checked={enableDarkMode}
            onChange={(v) => {
              setEnableDarkMode(v);
            }}
          />
        </Space>
      </div>
    </div>
  );
}
