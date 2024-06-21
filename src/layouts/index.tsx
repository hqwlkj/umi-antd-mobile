import { Outlet, useLocation, useOutletContext } from '@umijs/max';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React, { useMemo, useState } from 'react';
import routes from '../../config/routes';
import TabBarLayout from './tab-bar';
import { BadgeProps } from 'antd-mobile/es/components/badge';
import './index.less';

export interface TabBarItemValueProps {
  homeBadge?: BadgeProps['content'];
  todoBadge?: BadgeProps['content'];
  messageBadge?: BadgeProps['content'];
  meBadge?: BadgeProps['content'];
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

  const getLayoutChildren = useMemo(() => {
    if (pathname.startsWith('/tab-bar/')) {
      return (
        <TabBarLayout
          routes={
            routes?.filter((x) => x.path === '/' && x?.routes)[0]?.routes ?? []
          }
        />
      );
    }

    return (
      <div className="basic-layout-warp">
        <Outlet context={{ prop: 'basic Layout' }} />
      </div>
    );
  }, [props]);

  console.log('taBarItemValues', taBarItemValues);

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
