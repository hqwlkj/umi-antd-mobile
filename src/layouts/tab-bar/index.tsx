import { history, useLocation, useOutletContext } from '@umijs/max';
import { TabBar } from 'antd-mobile';
import {
  AlipayCircleFill,
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import type { TabBarItemProps } from 'antd-mobile/es/components/tab-bar';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from './index.less';
import { TabBarContext } from '@/layouts';

export default ({
  children,
  routes,
}: {
  children: React.ReactNode;
  routes: any[];
}) => {
  const [tabs, setTabs] = useState<TabBarItemProps[] | any[]>([]);
  const [activeKey, setActiveKey] = useState<string>('');
  const { pathname } = useLocation();
  const tabBarContext = useContext(TabBarContext);
  const props = useOutletContext();

  useEffect(() => {
    console.log('========================', routes);
    if (routes) {
      const _tabs = (routes || [])
        .filter((x: any) => !!x.icon)
        .map((_route: any) => {
          console.log('route', _route);
          return {
            key: (_route.path || '').replace('/', ''),
            tabIndex: (_route.path || '').replace('/', ''),
            title: _route.title,
            icon: _route.icon,
            badge: _route.badgeKey,
          };
        });
      if (pathname) {
        setActiveKey(pathname.replace('/', ''));
      } else {
        setActiveKey(_tabs[0].key);
      }
      setTabs(_tabs);
    }
  }, [props, pathname]);

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
        {tabs.map((item: TabBarItemProps) => (
          <TabBar.Item
            key={item.tabIndex}
            icon={renderTabItemIcon(item.icon as string)}
            title={item.title}
            badge={tabBarContext?.items?.['homeBadge'] || null}
          />
        ))}
      </TabBar>
    </div>
  );
};
