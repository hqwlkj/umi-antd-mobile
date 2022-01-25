/**
 * 路由配置
 * 更多路由请查询 https://umijs.org/zh-CN/docs/routing
 */
export default [
  { exact: true, path: "/", redirect: "/home/index" },
  {
    path: "/home",
    component: "@/layouts/tab-bar/index",
    routes: [
      {
        path: "/home/index",
        title: "首页",
        icon: "AlipayCircleFill",
        component: "@/pages/home/index"
      },
      {
        path: "/home/todo",
        title: "我的待办",
        icon: "UnorderedListOutline",
        wrappers: [ // 配置路由的高阶组件封装
          "@/authority/index" //用于路由级别的权限校验
        ],
        component: "@/pages/todo/index"
      },
      {
        path: "/home/message",
        title: "我的消息",
        icon: "MessageOutline",
        wrappers: [ // 配置路由的高阶组件封装
          "@/authority/index" //用于路由级别的权限校验
        ],
        component: "@/pages/message/index"
      },
      {
        path: "/home/personalCenter",
        title: "个人中心",
        icon: "UserOutline",
        wrappers: [ // 配置路由的高阶组件封装
          "@/authority/index" //用于路由级别的权限校验
        ],
        component: "@/pages/account/index"
      }
    ]
  },
  {
    path: "/basic",
    component: "@/layouts/basic/index",
    routes: [
      { path: "/list", component: "@/pages/home/index" },
      { path: "/admin", component: "@/pages/home/index" }
    ]
  },
  {
    path: "/detail",
    component: "@/layouts/detail/index",
    routes: [
      { path: "/detail/test", title: "详情页", component: "@/pages/details/index" },
      { path: "/detail/info", title: "详情页", component: "@/pages/details/info" }
    ]
  },
  {
    path: "/test", component: "@/pages/details/info"
  },
  { exact: true, path: "/login", component: "@/pages/login/index" },
  { exact: true, path: "/*", component: "@/pages/404" },
  { path: "/**/*", redirect: "/404" }
];
