import {
  NavBar,
  Toast,
  Swiper,
  Space,
  Button,
  List,
  Avatar,
  CapsuleTabs,
  Image,
} from 'antd-mobile';
import { useHistory } from 'umi';
import { tools } from '@/mock/home';

export default () => {
  const history = useHistory();
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div style={{ background: color }}>{index + 1}</div>
    </Swiper.Item>
  ));

  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.goBack(),
    });

  return (
    <div>
      <NavBar onBack={back}>办公用品领取</NavBar>
      {/* <Swiper autoplay>{items}</Swiper> */}
      <Space>
        <Avatar src="" />
        张地瓜
        <Button
          shape="rounded"
          onClick={() => {
            alert('hello.');
          }}
        >
          领取记录
        </Button>
        <Button
          shape="rounded"
          onClick={() => {
            alert('hello.');
          }}
        >
          愿望池
        </Button>
      </Space>
      <div>2022-11-09 近日上新：彩色笔上新，限量500份，先到先得！！</div>
      <Space>
        <span>办公用品 (5)</span>
        <span>提需求</span>
      </Space>
      <List header="用户列表">
        {tools.map((tool) => (
          <List.Item
            key={tool.name}
            prefix={
              <Image
                src={tool.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={tool.description}
            arrow={'领取'}
          >
            {tool.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
};
