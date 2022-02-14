import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TabBar } from 'antd-mobile';
import type { TabBarItemProps } from 'antd-mobile/es/components/tab-bar';
import type { IRouteComponentProps } from 'umi';
import {
  AlipayCircleFill,
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import styles from './index.less';
import { TabBarContext } from '@/layouts';

export default ({
  children,
  route,
  history,
  location,
}: IRouteComponentProps) => {
  const [tabs, setTabs] = useState<TabBarItemProps[] | any[]>([]);
  const [activeKey, setActiveKey] = useState<string>('');
  const tabBarContext = useContext(TabBarContext);
  useEffect(() => {
    const { pathname } = location;
    if (route) {
      const { routes } = route as any;
      const _tabs = (routes || [])
        .filter((x: any) => !!x.icon)
        .map((_route: any) => ({
          key: (_route.path || '').replace('/', ''),
          title: _route.title,
          icon: _route.icon,
          badge: _route.badgeKey,
        }));
      if (pathname) {
        setActiveKey(pathname.replace('/', ''));
      } else {
        setActiveKey(_tabs[0].key);
      }
      setTabs(_tabs);
    }
  }, [route, location]);

  const renderTabItemIcon = useCallback((name: string) => {
    switch (name) {
      case 'AppOutline':
        return <AppOutline />;
      case 'AlipayCircleFill':
        return <AlipayCircleFill />;
      case 'UnorderedListOutline':
        return <UnorderedListOutline />;
      case 'MessageFill':
        return <MessageFill />;
      case 'MessageOutline':
        return <MessageFill />;
      case 'UserOutline':
        return <UserOutline />;
      default:
        return '';
    }
  }, []);

  return (
    <div className={styles['tab-bar-layout']}>
      <div className={styles['container-warp']}>
        <div className={styles['view-warp']}>{children}</div>
      </div>
      <TabBar
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
          history.replace('/' + key);
        }}
        safeArea
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={renderTabItemIcon(item.icon)}
            title={item.title}
            badge={tabBarContext.items[item.badge] || null}
          />
        ))}
      </TabBar>
    </div>
  );
};
