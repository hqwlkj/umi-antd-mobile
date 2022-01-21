# umi-antd-mobile 移动应用


[![Build With Umi](https://img.shields.io/badge/build%20with-umi-028fe4.svg?style=flat-square)](http://umijs.org/)
[![Build With antd-mobile](https://img.shields.io/badge/build-antd--mobile-green.svg)](https://mobile.ant.design)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]()

## **文档和框架都在逐步进行完善中**

## 开始使用

安装项目依赖,

```bash
$ yarn
```

本地启动,

```bash
$ yarn start
```
## 内置 Layout

在 `src/layouts`中配置了两个常用的 `layout` 组件。

1、`tab-bar` layout 主要用于根据配置的 `routes` 动态生成带有 Tabbar 的页面；同时可以根据浏览器地址栏的地址选择对于的 TabItem;

2、`basic` layout 主要用于普通的路由使用；目前没有做过多的封装；


## FQA
 1. 如何更换自动生成的 `TabBar` 图标？
 
```text
由于 `umijs` 的路由配置中没有支持 icon 属性可以为一个图标，所以需要自己进行处理，处理的方式如下：

在配置 `routes` 时，将`icon`设置为 `antd-mobile-icons` 中的图标名称；然后在 `src/layouts/tab-bar/index.tsx` 中的 `renderTabItemIcon` 函数中对应进行修改。

```



## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我一起共建 :smiley:：

- 通过 [Issue](https://github.com/hqwlkj/umi-antd-mobile/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/hqwlkj/umi-antd-mobile/pulls) 改进代码。




