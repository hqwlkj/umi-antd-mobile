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
  routes: routes,
  // nodeModulesTransform: {
  //   type: "none"
  // },
  layout: false,
  request: {},
  alias: {
    // "antd-mobile": "antd-mobile/2x" //使用高清适配
  },
  // mfsu: { production: { output: ".mfsu-production" } },
  fastRefresh: true,
  clickToComponent: {},
  extraBabelPlugins: [],
  autoprefixer: {
    overrideBrowserslist: [
      'Android 4.1',
      'iOS 7.1',
      'Chrome > 31',
      'ff > 31',
      'ie >= 8',
      'last 10 versions', // 所有主流浏览器最近10版本用
    ],
    grid: true,
  },
  postcssLoader: {},
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 750, // 视口宽度，对应设计稿的宽度，一般是 375 或 750
      viewportHeight: 1334, // 视口高度，根据 750 设备的宽度来指定，一般指定 1334 也可以不配置
      unitPrecision: 3, // 指定 `px` 转换为视口单位值的小数位数
      viewportUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视口单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于 `1px` 不转换为视口单位，你也可以设置为你想要的值
      mediaQuery: true, // 允许在媒体查询中转换 `px`
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
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no',
    },
  ],
  // https://mobile.ant.design/zh/guide/quick-start#%E5%85%BC%E5%AE%B9%E6%80%A7
  targets: {
    chrome: 49,
    ios: 10,
  },
});
