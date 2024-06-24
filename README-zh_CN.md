
<div align="center">
<br/>
<br/>
<br/>
<br/>
<p align="center">
  <a href='https://umijs.org/zh-CN/'>
    <img src='https://user-images.githubusercontent.com/12181423/150708308-e0ca55ed-1bda-4db6-9e69-f34dbc27c01d.png' width='80'  alt="umijs"/>
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href='https://mobile.ant.design/zh'>
    <img src='https://gw.alipayobjects.com/zos/bmw-prod/b2c7ff8b-eba0-4af9-9dd5-0b5b17f42c57.svg' width='105' alt="mobile"/>
  </a>
</p>
<p align="center" height='100'>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href='https://umijs.org/zh-CN/'>
    <strong>UmiJS</strong>
  </a>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href='https://mobile.ant.design/zh'>
     <strong>Ant Design Mobile</strong>
  </a>
</p>
<br/>
<br/>
<br/>
<br/>
<h1>umi-antd-mobile 移动应用</h1>


[![Build With Umi](https://img.shields.io/badge/build%20with-umi-028fe4.svg)](https://umijs.org/zh-CN)
[![Build With antd-mobile](https://img.shields.io/badge/build-antd--mobile-green.svg)](https://mobile.ant.design)
[![GitHub license](https://img.shields.io/github/license/hqwlkj/umi-antd-mobile)](https://github.com/hqwlkj/umi-antd-mobile)

[English](./README.md) · 中文
<br/>
<br/>
</div>


# 快速上手

## 环境准备

首先得有 [node](https://nodejs.org/en/)，并确保 node 版本是 10.13 或以上。（mac 下推荐使用 [nvm](https://github.com/creationix/nvm) 来管理 node 版本）

```bash
$ node -v
v10.13.0
```

推荐使用 yarn 管理 npm 依赖，并[使用国内源](https://github.com/yiminghe/tyarn)（阿里用户使用内网源）。

```bash

# 国内源
$ npm i yarn tyarn -g

# 后面文档里的 yarn 换成 tyarn
$ tyarn -v

# 阿里内网源
$ tnpm i yarn @ali/yarn -g

# 后面文档里的 yarn 换成 ayarn
$ ayarn -v
```


## 开始使用

clone项目

```bash
$ git clone --depth=1 https://github.com/hqwlkj/umi-antd-mobile.git my-project

$ cd my-project
```

安装项目依赖

```bash
$ yarn
```

本地启动

```bash
$ yarn start
```

## 部署发布

### 构建

```bash
$ yarn build

✔ Webpack
  Compiled successfully in 17.17s

 DONE  Compiled successfully in 17167ms                                       8:26:25 PM

Build success.
✨  Done in 20.79s.
```

构建产物默认生成到 `./dist` 下，然后通过 tree 命令查看，

```bash
tree ./dist

./dist
├── index.html
├── umi.css
└── umi.js
```

### 本地验证

发布之前，可以通过 `serve` 做本地验证，

```bash
$ yarn global add serve
$ serve ./dist

   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            http://localhost:5000        │
   │   - On Your Network:  http://192.168.12.34:5000    │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

访问 [http://localhost:5000](http://localhost:5000)，正常情况下应该是和执行 `yarn start` 时是一致的。

### 部署

本地验证完，就可以部署了。你需要把 `dist` 目录部署到服务器上。

更多关于 **umijs** 的相关配置，请查阅 [umijs官方文档](https://umijs.org/zh-CN/config)

更多关于 **antd-mobile** 的相关组件使用说明，请查阅 [Ant Design Mobile官方文档](https://mobile.ant.design/zh/components/button)


## 预览效果图

<img src="https://user-images.githubusercontent.com/12181423/150905972-d8bd4608-d86b-4bcc-98bc-ca42e2f91146.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/151107456-cf3ca33f-f2ee-4fb4-9f04-1426b729dba7.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/151107542-24f5c943-2af2-4e20-91ef-fb18d9aadbf7.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/150569860-2f288815-75b8-4cd9-abae-ee90f310826f.png" width="200" />&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/12181423/150569985-360f6b7e-0805-49e0-89fa-724307140bb5.png" width="200" />

https://github.com/hqwlkj/umi-antd-mobile/assets/12181423/e7fc06ba-f835-4f7c-a412-a7e0b9664095

目前还是一个测试demo，所以图片就是一个截屏图，大家先将就看看 😂😂😂

## 内置 Layout

在 `src/layouts`中配置了两个常用的 `layout` 组件。

>1、`tab-bar` layout 主要用于根据配置的 `routes` 动态生成带有 Tabbar 的页面(如示例效果图)；同时可以根据浏览器地址栏的地址选择对于的 TabItem;

>2、<del> `basic` layout 主要用于普通的路由使用；目前没有做过多的封装；</del>

**这里的layout需要重新再构思一下；也希望社区能提供更好的建议**


## FAQ
 >1. 如何更换自动生成的 `TabBar` 图标？
 
```text
由于 `umijs` 的路由配置中没有支持 icon 属性可以为一个图标，所以需要自己进行处理，处理的方式如下：

在配置 `routes` 时，将`icon`设置为 `antd-mobile-icons` 中的图标名称；
然后在 `src/layouts/tab-bar/index.tsx` 中的 `renderTabItemIcon` 函数中对应进行修改。

```

 >2. 整理中 😄😄



## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我一起共建 :smiley:：

- 通过 [Issue](https://github.com/hqwlkj/umi-antd-mobile/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/hqwlkj/umi-antd-mobile/pulls) 改进代码。



## LICENSE

[MIT](https://github.com/hqwlkj/umi-antd-mobile/blob/master/LICENSE.md)
