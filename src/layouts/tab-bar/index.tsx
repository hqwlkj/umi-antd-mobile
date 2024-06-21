import { history, Outlet, useLocation, useOutletContext } from '@umijs/max';
import { TabBar } from 'antd-mobile/2x';
import {
  AlipayCircleFill,
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import type { TabBarItemProps } from 'antd-mobile/es/components/tab-bar';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TabBarContext } from '@/layouts';
import styles from './index.less';

export default ({ routes }: { routes: any[] }) => {
  const [tabs, setTabs] = useState<TabBarItemProps[] | any[]>([]);
  const [activeKey, setActiveKey] = useState<string>('');
  const { pathname } = useLocation();
  const tabBarContext = useContext(TabBarContext);
  const props = useOutletContext();

  useEffect(() => {
    if (routes) {
      const _tabs = (routes || [])
        .filter((x: any) => !!x.icon)
        .map((_route: any) => {
          const badgeKey = _route.badgeKey;
          // @ts-ignore
          const badge =
            tabBarContext?.items?.[badgeKey as string] || _route.badge;
          return {
            key: (_route.path || '').replace('/', ''),
            tabIndex: (_route.path || '').replace('/', ''),
            title: _route.title,
            icon: _route.icon,
            badge: badge,
          };
        });
      if (pathname) {
        setActiveKey(pathname.replace('/', ''));
      } else {
        setActiveKey(_tabs[0].key);
      }
      setTabs(_tabs);
    }
  }, [props, pathname, tabBarContext?.items]);

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
        <div className={styles['view-warp']}>
          <Outlet />
        </div>
      </div>
      <TabBar
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
          history.replace('/' + key);
        }}
        safeArea
      >
        {tabs.map((item: TabBarItemProps) => (
          <TabBar.Item
            data-key={item.tabIndex}
            key={item.tabIndex}
            icon={renderTabItemIcon(item.icon as string)}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </div>
  );
};
