---
title: Layout 布局
---

# Layout 布局

**使用方法**

### 基本用法

<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<b-layout>` 的子元素只能是`<b-header><b-content><b-footer><b-sider>`，后四者的父元素也只能是 `<b-layout>`。
:::

#### 示例代码

```html
<b-layout>
  <b-header>Header</b-header>
  <b-content>Content</b-content>
  <b-footer>Footer</b-footer>
</b-layout>
<b-layout>
  <b-Sider>Sider</b-Sider>
  <b-content>Content</b-content>
</b-layout>
<b-layout>
  <b-header>Header</b-header>
  <b-layout>
    <b-Sider>Sider</b-Sider>
    <b-content>Content</b-content>
  </b-layout>
  <b-footer>Footer</b-footer>
</b-layout>
<b-layout>
  <b-Sider>Sider</b-Sider>
  <b-layout>
    <b-header>Header</b-header>
    <b-content>Content</b-content>
  </b-layout>
</b-layout>
<b-layout>
  <b-Sider>Sider</b-Sider>
  <b-layout>
    <b-header>Header</b-header>
    <b-content>Content</b-content>
    <b-footer>Footer</b-footer>
  </b-layout>
</b-layout>
<style>
  .b-header,
  .b-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .b-sider {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 150px;
  }

  .b-content {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
</style>
```
