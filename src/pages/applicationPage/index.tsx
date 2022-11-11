import SelectPopup from '@/components/SelectPopup';
import { NavBar, Toast, Form, Input, Button } from 'antd-mobile';
import { useState } from 'react';
import cx from 'classnames';
import { useHistory } from 'umi';
import { tools } from '@/mock/home';

import './index.less';
export default () => {
  const history = useHistory();
  const [positionVisible, setPositionVisible] = useState(false);
  const [toolVisible, setToolVisible] = useState(false);
  const [powerVisible, setPowerVisible] = useState(false);
  const [userName, setUserName] = useState<string>();
  const [workNumber, setWorkNumber] = useState<string>();
  const { name } = history.location.state as {
    id: string;
    avatar: string;
    name: string;
    description: string;
  };
  const [position, setPosition] = useState<string>();
  const [selectedTool, setSelectedTool] = useState<string>(name);
  const [power, setPower] = useState<string>();
  const back = () => {
    history.goBack();
  };
  const positionOptions = [
    { label: '上海', value: '1' },
    { label: '成都', value: '2' },
  ];
  const toolOptions = tools.map((item) => ({
    label: item.name,
    value: item.name,
  }));
  const positionTitle = positionOptions.find(
    (val) => val.value === position,
  )?.label;
  const powerOptions = [
    { value: '产品部门', label: '产品部门' },
    { value: '研发部门', label: '研发部门' },
    { value: '人力资源中台', label: '人力资源中台' },
    { value: '销售部门', label: '销售部门' },
    { value: '运营部门', label: '运营部门' },
    { value: '主管部门', label: '主管部门' },
    { value: '公司合伙人', label: '公司合伙人' },
  ];
  const onSubmitApplication = () => {
    if (!position) {
      Toast.show('请选择地区');
    }
    if (!selectedTool) {
      Toast.show('请选择领取物品');
    }
    if (!power) {
      Toast.show('请选择部门');
    }
    if (!userName) {
      Toast.show('请输入姓名');
    }
    if (!workNumber) {
      Toast.show('请输入工号');
    }
    const data = { position, selectedTool, power, userName, workNumber };
    console.log(data, '00-');
  };
  return (
    <div className="application-content">
      <NavBar onBack={back} className="application-nav">
        领取
      </NavBar>

      <Form layout="horizontal" mode="card" className="application-form">
        <Form.Item
          label="地区"
          trigger="onConfirm"
          description={positionTitle || '请选择'}
          onClick={() => {
            setPositionVisible(true);
          }}
          className={cx({
            'selected-form': positionTitle,
            'no-selected-form': !positionTitle,
          })}
        >
          <SelectPopup
            onClose={() => {
              setPositionVisible(false);
            }}
            visible={positionVisible}
            options={positionOptions}
            title="地区"
            onConfirm={setPosition}
          />
        </Form.Item>
        <Form.Item
          label="领取物品"
          trigger="onConfirm"
          onClick={() => {
            setToolVisible(true);
          }}
          description={selectedTool || '请选择'}
          className={cx({
            'selected-form': selectedTool,
            'no-selected-form': !selectedTool,
          })}
        >
          <SelectPopup
            onClose={() => {
              setToolVisible(false);
            }}
            visible={toolVisible}
            options={toolOptions}
            title="领取物品"
            onConfirm={setSelectedTool}
          />
        </Form.Item>
        <Form.Item label="姓名">
          <Input
            placeholder="请填写"
            style={{ '--text-align': 'right' }}
            onChange={setUserName}
          />
        </Form.Item>
        <Form.Item label="工号">
          <Input
            placeholder="请填写"
            style={{ '--text-align': 'right' }}
            onChange={setWorkNumber}
          />
        </Form.Item>
        <Form.Item
          label="部门"
          trigger="onConfirm"
          onClick={() => {
            setPowerVisible(true);
          }}
          description={power || '请选择'}
          className={cx({ 'selected-form': power, 'no-selected-form': !power })}
        >
          <SelectPopup
            onClose={() => {
              setPowerVisible(false);
            }}
            visible={powerVisible}
            options={powerOptions}
            title="部门"
            onConfirm={setPower}
          />
        </Form.Item>
        <Form.Header />
      </Form>
      <div className="application-bottom">
        <Button onClick={() => history.goBack()}>取消</Button>
        <Button color="primary" onClick={onSubmitApplication}>
          提交
        </Button>
      </div>
    </div>
  );
};
