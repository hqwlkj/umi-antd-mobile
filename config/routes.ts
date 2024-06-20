/**
 * 路由配置
 * 更多路由请查询 https://umijs.org/zh-CN/docs/routing
 */
export default [
  { path: '/', redirect: '/tab-bar/index' },
  {
    path: '/',
    layout: '@/layouts/index', // 采用umi 约定的全局路由， 因为umi不能针对不同的路由配置不同的 layout，所以需要在全局的layout中特殊处理。
    routes: [
      {
        path: '/tab-bar/index',
        title: '首页',
        icon: 'AlipayCircleFill',
        component: '@/pages/home/index',
      },
      {
        path: '/tab-bar/todo',
        title: '我的待办',
        badgeKey: 'todoBadge',
        icon: 'UnorderedListOutline',
        wrappers: [
          // 配置路由的高阶组件封装
          '@/wrappers/index', //用于路由级别的权限校验
        ],
        component: '@/pages/todo/index',
      },
      {
        path: '/tab-bar/message',
        title: '我的消息',
        icon: 'MessageOutline',
        badgeKey: 'messageBadge',
        wrappers: [
          // 配置路由的高阶组件封装
          '@/wrappers/index', //用于路由级别的权限校验
        ],
        component: '@/pages/message/index',
      },
      {
        path: '/tab-bar/personalCenter',
        title: '个人中心',
        icon: 'UserOutline',
        wrappers: [
          // 配置路由的高阶组件封装
          '@/wrappers/index', //用于路由级别的权限校验
        ],
        component: '@/pages/account/index',
      },
    ],
  },
  { path: '/detail', title: '详情页', component: '@/pages/details/index' },
  { path: '/login', component: '@/pages/login/index', layout: false },
  { path: '/home', component: '@/pages/home/index', layout: false },
  { path: '/*', component: '@/pages/404', layout: false },
  { path: '/**/*', redirect: '/404', layout: false },
];
