import { Outlet, useLocation, useOutletContext } from '@umijs/max';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React, { useMemo, useState } from 'react';
import routess from '../../config/routes';
import TabBarLayout from './tab-bar';
import { useAppData, useSelectedRoutes } from '@@/exports';
import { TabBarItemProps } from 'antd-mobile/es/components/tab-bar';
import './index.less';

export interface TabBarItemValueProps {
  homeBadge?: TabBarItemProps['badge'];
  todoBadge?: TabBarItemProps['badge'];
  messageBadge?: TabBarItemProps['badge'];
  meBadge?: TabBarItemProps['badge'];
}

export const TabBarContext = React.createContext<{
  items: TabBarItemValueProps;
  callback?: (values: TabBarItemValueProps) => void;
}>({
  items: {},
});

/**
 * 不同的全局 layout
 * @param props
 * @url https://umijs.org/zh-CN/docs/convention-routing#%E4%B8%8D%E5%90%8C%E7%9A%84%E5%85%A8%E5%B1%80-layout
 */
export default () => {
  const [taBarItemValues, setTabBarItemValues] = useState<
    TabBarItemValueProps | any
  >({});
  const { pathname } = useLocation();
  const props = useOutletContext();
  const { clientRoutes } = useAppData();
  const routes = useSelectedRoutes();
  console.log('clientRoutes', clientRoutes);
  console.log('routes', routes, routess);

  const getLayoutChildren = useMemo(() => {
    if (pathname.startsWith('/tab-bar/')) {
      console.log(
        '====== TabBarLayout ======',
        routess.filter((x) => x.path === '/' && x?.routes)[0].routes,
      );
      return (
        <TabBarLayout
          routes={
            routess?.filter((x) => x.path === '/' && x?.routes)[0]?.routes ?? []
          }
        >
          <Outlet />
        </TabBarLayout>
      );
    }

    return (
      <div className="basic-layout-warp">
        <Outlet context={{ prop: 'basic Layout' }} />
      </div>
    );
  }, [props]);
  return (
    <ConfigProvider locale={zhCN}>
      <TabBarContext.Provider
        value={{
          items: taBarItemValues,
          callback: (items) => setTabBarItemValues({ ...items }),
        }}
      >
        <div className="global-layout">{getLayoutChildren}</div>
      </TabBarContext.Provider>
    </ConfigProvider>
  );
};
