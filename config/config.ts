import { defineConfig } from '@umijs/max';
import routes from './routes';

/**
 * UMI 配置
 * 更多相关配置查询 https://umijs.org/zh-CN/docs/config
 */
export default defineConfig({
  // layout: true,
  title: 'umi-antd-mobile',
  // dynamicImport: {
  //   loading: "@/pages/loading"
  // },
  routes: [...routes],
  // nodeModulesTransform: {
  //   type: "none"
  // },
  // antdMobile: {
  //   hd: true
  // },
  alias: {
    // "antd-mobile": "antd-mobile/2x" //使用高清适配
  },
  // mfsu: { production: { output: ".mfsu-production" } },
  fastRefresh: true,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
      },
    ],
  ],
  autoprefixer: {
    // 配置 Autoprefixer 选项
    overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
  },
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      mediaQuery: true,
    }),
  ],
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs, antd-mobile',
    },
    {
      name: 'description',
      content: '基于umi@3.x + antd-mobile@next 快速构建h5及app应用',
    },
  ],
  // https://mobile.ant.design/zh/guide/quick-start#%E5%85%BC%E5%AE%B9%E6%80%A7
  targets: {
    chrome: 49,
    ios: 10,
  },
});
