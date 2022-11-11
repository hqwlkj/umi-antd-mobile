/**
 * 路由配置
 * 更多路由请查询 https://umijs.org/zh-CN/docs/routing
 */
export default [
  { exact: true, path: '/', redirect: '/home-page' },
  {
    path: '/',
    component: '@/layouts/index', // 采用umi 约定的全局路由， 因为umi不能针对不同的路由配置不同的 layout，所以需要在全局的layout中特殊处理。
    routes: [
      // 首页
      { path: '/home-page', component: '@/pages/homePage/index' },
      // 领取记录
      { path: '/history-page', component: '@/pages/historyPage/index' },
      // 领取页面
      { path: '/application-page', component: '@/pages/applicationPage/index' },
      // 提需求
      { path: '/needs-page', component: '@/pages/needsPage/index' },
      // 愿望池
      { path: '/wishes-page', component: '@/pages/wishesPage/index' },
      { path: '/*', component: '@/pages/404' },
      { path: '/**/*', redirect: '/404' },
      { path: '/**/*', redirect: '/404' },
    ],
  },
];
