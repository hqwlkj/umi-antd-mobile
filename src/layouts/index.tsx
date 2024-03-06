import { Outlet, useLocation, useOutletContext } from '@umijs/max';
import { ConfigProvider } from 'antd-mobile';
import type { BadgeProps } from 'antd-mobile/es/components/badge';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React, { useMemo, useState } from 'react';
import routes from '../../config/routes';
import './index.less';
import TabBarLayout from './tab-bar';

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
    if (pathname.includes('/tabBar/')) {
      console.log('====== TabBarLayout ======');
      return (
        <TabBarLayout>
          <Outlet
            context={{
              name: 'TabBar Layout',
              component: '@/layouts/index',
              routes:
                routes?.find((x) => x.component === '@/layouts/index')
                  ?.routes ?? [],
            }}
          />
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
