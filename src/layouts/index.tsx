import type { IRouteComponentProps } from 'umi';
import React, { useMemo, useState } from 'react';
import type { BadgeProps } from 'antd-mobile/es/components/badge';
import TabBarLayout from './tab-bar';
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
export default (props: IRouteComponentProps) => {
  const [taBarItemValues, setTabBarItemValues] = useState<
    TabBarItemValueProps | any
  >({});
  const getLayoutChildren = useMemo(() => {
    if (props.location.pathname.includes('/tabBar/')) {
      console.log('====== TabBarLayout ======');
      return <TabBarLayout {...props}>{props.children}</TabBarLayout>;
    }
    console.log('basic-layout-warp');
    return <div className="basic-layout-warp">{props.children}</div>;
  }, [props]);
  return (
    <TabBarContext.Provider
      value={{
        items: taBarItemValues,
        callback: (items) => setTabBarItemValues({ ...items }),
      }}
    >
      <div className="global-layout">{getLayoutChildren}</div>
    </TabBarContext.Provider>
  );
};
