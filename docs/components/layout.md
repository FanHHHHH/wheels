---
title: layout 布局
---

# 布局

**使用方法**

#### 基本用法

<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<b-layout>` 的子元素只能是`<b-header><b-content><b-footer><b-sider>`，后四者的父元素也只能是 `<b-layout>`。

##### 示例代码

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
```
