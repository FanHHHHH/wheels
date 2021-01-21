---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i blue-ui -S
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式

2. 引入 blue-vue-ui

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
import { Button, ButtonGroup, Icon } from 'blue-ui'
import 'blue-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'b-button': Button,
    'b-icon': Icon,
  },
}
```

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import { Button, Icon, ButtonGroup, Input, Col, Row, Layout, Header, Footer, Sider, Content, Toast, plugin, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Popover, Collapse, CollapseItem } from 'blue-ui'

Vue.component('b-button', Button)
Vue.component('b-icon', Icon)
Vue.component('b-button-group', ButtonGroup)
Vue.component('b-input', Input)
Vue.component('b-row', Row)
Vue.component('b-col', Col)
Vue.component('b-layout', Layout)
Vue.component('b-header', Header)
Vue.component('b-sider', Sider)
Vue.component('b-content', Content)
Vue.component('b-footer', Footer)
Vue.use(plugin) // toast 组件的使用方法
Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)
Vue.component('b-popover', Popover)
Vue.component('b-collapse', Collapse)
Vue.component('b-collapse-item', CollapseItem)
```
