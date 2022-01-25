import { NoticeBar, Space } from "antd-mobile";
import { CloseCircleOutline, CompassOutline } from "antd-mobile-icons";

export default ()=>{
  return <>
    <Space block direction='vertical'>
      <NoticeBar content='默认' color='default' />
      <NoticeBar content='警告' color='alert' />
      <NoticeBar content='错误' color='error' />
      <NoticeBar content='信息' color='info' />
      <NoticeBar content='超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动超长滚动' color='alert' />
      <NoticeBar content='这条通知可以关闭' color='alert' closeable />
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
        color='alert'
      />
    </Space>
  </>
}
