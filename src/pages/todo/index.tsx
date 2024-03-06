import { TabBarContext } from '@/layouts';
import { history } from '@umijs/max';
import { Badge, List, Switch } from 'antd-mobile';
import {
  PayCircleOutline,
  SetOutline,
  UnorderedListOutline,
} from 'antd-mobile-icons';
import { useCallback, useContext, useState } from 'react';

const Todo = () => {
  const todo = useContext(TabBarContext);
  const [count, setCount] = useState(0);

  const addTodoList = useCallback(() => {
    todo.callback &&
      todo.callback({
        ...todo.items,
        todoBadge: Math.floor(Math.random() * 100 + 1),
      });
  }, [todo]);

  const addMessage = useCallback(() => {
    todo.callback && todo.callback({ ...todo.items, messageBadge: Badge.dot });
  }, [todo]);

  const closeAllBadge = useCallback(() => {
    todo.callback && todo.callback({ messageBadge: null, todoBadge: null });
  }, [todo]);

  return (
    <>
      <List header="TabBar Badge 显示控制">
        <List.Item
          onClick={() => addTodoList()}
          extra="随机显示一个0～100以内的数字"
        >
          增加我的代办
        </List.Item>
        <List.Item
          onClick={() => {
            setCount(count + 1);
            todo.callback &&
              todo.callback({
                ...todo.items,
                messageBadge: count + 1 >= 20 ? '20+' : count + 1,
              });
          }}
          extra="消息tab显示具体条数，最大20+"
        >
          增加消息
        </List.Item>
        <List.Item onClick={() => addMessage()} extra="消息tab显示红点">
          增加消息
        </List.Item>
        <List.Item
          onClick={() => closeAllBadge()}
          extra="清空全部的 Badge 显示"
        >
          清楚全部
        </List.Item>
        <List.Item onClick={() => history.push('/detail')} extra="跳转到详情页">
          在其他页面展示数据
        </List.Item>
      </List>

      <List header="可点击的功能列表">
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          设置
        </List.Item>
      </List>

      <List header="复杂布局">
        <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item>
        <List.Item extra="未开启" clickable>
          大字号模式
        </List.Item>
        <List.Item description="管理已授权的产品和设备" clickable>
          授权管理
        </List.Item>
        <List.Item title="这里是标题">这里是主信息</List.Item>
      </List>

      <List header="列表项禁用">
        <List.Item disabled clickable prefix={<UnorderedListOutline />}>
          账单
        </List.Item>
        <List.Item disabled prefix={<PayCircleOutline />}>
          总资产
        </List.Item>
      </List>
    </>
  );
};

Todo.title = 'TOTO';
Todo.icon = 'toto-icon';
Todo.badge = '5';
export default Todo;
