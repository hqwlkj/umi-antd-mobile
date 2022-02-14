import { Grid, NoticeBar, Space } from 'antd-mobile';
import { CloseCircleOutline, CompassOutline } from 'antd-mobile-icons';
import { UmiAntdMobileIcon } from '@/components';

export default () => {
  return (
    <>
      <Space block direction="vertical">
        <NoticeBar content="默认" color="default" />
        <NoticeBar content="警告" color="alert" />
        <NoticeBar content="错误" color="error" />
        <NoticeBar content="信息" color="info" />
        <NoticeBar
          content="超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动"
          color="alert"
        />
        <NoticeBar content="这条通知可以关闭" color="alert" closeable />
        <NoticeBar
          extra={<CloseCircleOutline style={{ fontSize: 18 }} />}
          icon={<CompassOutline />}
          content={'自定义图标'}
        />
        <NoticeBar
          extra={
            <Space style={{ '--gap': '12px' }}>
              <span>查看详情</span>
              <span>关闭</span>
            </Space>
          }
          content={'自定义右侧功能区'}
          color="alert"
        />
      </Space>

      <div>自定义icon</div>
      <Grid columns={6}>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-windows-fill" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-QQ" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-twitter" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-skype-fill" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-alipay-circle-fill" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-github-fill" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-dribbble-circle-fill" />
        </Grid.Item>
        <Grid.Item>
          <UmiAntdMobileIcon type="icon-twitter-circle-fill" />
        </Grid.Item>
      </Grid>
    </>
  );
};
