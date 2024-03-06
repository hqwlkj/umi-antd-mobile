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
import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.less';

export default ({ children }: { children: React.ReactNode }) => {
  const [tabs, setTabs] = useState<TabBarItemProps[] | any[]>([]);
  // const [activeKey, setActiveKey] = useState<string>('');
  const { pathname } = useLocation();
  const props = useOutletContext();
  console.log('proddddddddps', props);

  // useEffect(() => {
  //   const { pathname } = location;
  //   console.log('========================');
  //   if (props) {
  //     const { routes, name } = props as any;
  //     console.log('name', name);
  //     const _tabs = (routes || [])
  //       .filter((x: any) => !!x.icon)
  //       .map((_route: any) => ({
  //         key: (_route.path || '').replace('/', ''),
  //         title: _route.title,
  //         icon: _route.icon,
  //         badge: _route.badgeKey,
  //       }));
  //     if (pathname) {
  //       // setActiveKey(pathname.replace('/', ''));
  //     } else {
  //       // setActiveKey(_tabs[0].key);
  //     }
  //     console.log('tabs', tabs);
  //     setTabs(_tabs);
  //   }
  // }, [props]);
  useEffect(() => {
    console.log('weqqqqqqqqewqewqeqeqqqeqewqqqe');
  }, []);

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
        // activeKey={activeKey}
        onChange={(key) => {
          // setActiveKey(key);
          history.replace('/' + key);
        }}
        safeArea
      >
        {tabs.map((item: TabBarItemProps) => (
          <TabBar.Item
            key={item.tabIndex}
            icon={renderTabItemIcon(item.icon as string)}
            title={item.title}
            // badge={tabBarContext.items[item.badge as any] || null}
          />
        ))}
      </TabBar>
    </div>
  );
};
