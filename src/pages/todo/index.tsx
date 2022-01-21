import { NavBar, Toast, Result } from "antd-mobile";
import { useHistory } from "umi";

const Todo = ()=>{
  const history = useHistory();
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      afterClose: () => history.goBack()
    })

  return <div><NavBar back='返回' onBack={back}>标题</NavBar>
    <Result
      status='success'
      title='操作成功'
      description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
    />
  </div>
}

Todo.title = 'TOTO';
Todo.icon = 'toto-icon';
Todo.badge = '5';
export default Todo;
