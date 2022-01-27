# 自定义 font 图标
Icon 提供了一个 createFromIconfontCN 方法，方便开发者调用在 iconfont.cn 上自行管理的图标。

```tsx

import { createFromIconfontCN } from '@/components/icon';

const MyIcon = createFromIconfontCN({
scriptUrl: '//at.alicdn.com/t/font_3162733_un2ldgoxap.js', // 在 iconfont.cn 上生成
});

ReactDOM.render(<MyIcon type="icon-example" />, mountedNode);

```

其本质上是创建了一个使用 <use> 标签来渲染图标的组件。

options 的配置项如下：

| 参数 | 说明 | 类型                     | 默认值   | 版本 |
| --- | --- |------------------------|-------| --- |
| extraCommonProps | 给所有的 `svg` 图标 `<Icon />` 组件设置额外的属性 | { \[key: string]: any } | {}    |  |
| scriptUrl | [iconfont.cn](http://iconfont.cn/) 项目在线生成的 js 地址，支持 `string[]` 类型 | string \| string\[] | - |  |

在 `scriptUrl` 都设置有效的情况下，组件在渲染前会自动引入 [iconfont.cn](http://iconfont.cn/) 项目中的图标符号集，无需手动引入。

见 [iconfont.cn 使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code) 查看如何生成 js 地址。

### 注意：目前 `Icon` 导出的是一个空， 没有任何可用图标；


## 项目中使用帮助
如果需要使用自己的图标，请在 `components` 下的 `index.tx` 文件中修改 `scriptUrl`的链接地址，这个链接地址是在 [iconfont.cn官网](https://www.iconfont.cn) 生成的；

然后在项目中导入 `import { UmiAntdMobileIcon } from '@/components';` 即可使用；

示例代码：

```tsx
<Grid columns={6}>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-windows-fill'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-QQ'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-twitter'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-skype-fill'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-alipay-circle-fill'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-github-fill'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-dribbble-circle-fill'/>
  </Grid.Item>
  <Grid.Item>
    <UmiAntdMobileIcon  type='icon-twitter-circle-fill'/>
  </Grid.Item>
</Grid>
```

组件中的 `type` 就是在 `iconfont` 自定义的图标名称

更多使用方法请参考 [ant-design-icons](https://ant.design/components/icon-cn/)


