import React from 'react';
import { SpinLoading } from 'antd-mobile';
import '../app.less';

/**
 * 如何禁用掉每次刷新路由时出现的 loading... 状态？
 * https://umijs.org/zh-CN/docs/faq#%E5%A6%82%E4%BD%95%E7%A6%81%E7%94%A8%E6%8E%89%E6%AF%8F%E6%AC%A1%E5%88%B7%E6%96%B0%E8%B7%AF%E7%94%B1%E6%97%B6%E5%87%BA%E7%8E%B0%E7%9A%84-loading-%E7%8A%B6%E6%80%81%EF%BC%9F
 */
export default () => {
  return (
    <div className="loading-warp">
      <div>
        <SpinLoading color="primary" />
      </div>
      <div className="loading-warp-text">加载中...</div>
    </div>
  );
};
