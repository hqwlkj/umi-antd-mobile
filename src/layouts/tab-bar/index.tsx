import { useCallback, useEffect, useState } from "react";
import { TabBar } from "antd-mobile";
import { TabBarItemProps } from "antd-mobile/es/components/tab-bar";
import { IRouteComponentProps } from "umi";
import styles from "./index.less";
import { AlipayCircleFill, AppOutline, MessageFill, UnorderedListOutline, UserOutline } from "antd-mobile-icons";

export default ({ children, route, history, location }: IRouteComponentProps) => {
  const [tabs, setTabs] = useState<TabBarItemProps[] | any[]>([]);
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    const { pathname } = location;
    if (route) {
      const { routes } = route as any;
      const _tabs = (routes || []).map((_route: any, index: number) => ({
        key: (_route.path || "").replace("/", ""),
        title: _route.title,
        icon: _route.icon
      }));
      if (pathname) {
        setActiveKey(pathname.replace("/", ""));
      } else {
        setActiveKey(_tabs[0].key);
      }
      setTabs(_tabs);
    }
  }, [route, location]);

  const renderTabItemIcon = useCallback((name: string) => {
    switch (name) {
      case "AppOutline":
        return <AppOutline />;
      case "AlipayCircleFill":
        return <AlipayCircleFill />;
      case "UnorderedListOutline":
        return <UnorderedListOutline />;
      case "MessageFill":
        return <MessageFill />;
      case "MessageOutline":
        return <MessageFill />;
      case "UserOutline":
        return <UserOutline />;
      default:
        return "";
    }
  }, []);


  return (<div className={styles["tab-bar-layout"]}>
    <div className={styles["container-warp"]}>
      <div className={styles["view-warp"]}>{children}</div>
    </div>
    <TabBar activeKey={activeKey} onChange={(key) => {
      setActiveKey(key);
      history.replace("/" + key);
    }} safeArea>
      {tabs.map((item, index) => (
        <TabBar.Item key={item.key} icon={renderTabItemIcon(item.icon)} title={item.title} />
      ))}
    </TabBar>
  </div>);
}
