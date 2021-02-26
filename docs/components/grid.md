---
title: Grid 栅格系统
---

# Grid 栅格系统

**使用方法**

### 基础布局

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

:::tip
通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
:::

#### 示例代码(class 为样式，可不写)

```vue
<b-row>
    <b-col span="24"><div class="grid-content bg-purple-dark"></div></b-col>
    </b-row>
<b-row>
    <b-col span="12"><div class="grid-content bg-purple-light"></div></b-col>
    <b-col span="12"><div class="grid-content bg-purple"></div></b-col>
    </b-row>
<b-row>
    <b-col span="8"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="8"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="8"> <div class="grid-content bg-purple"></div> </b-col>
    </b-row>
<b-row>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    </b-row>
<b-row>
    <b-col span="4"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="4"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="4"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="4"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="4"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="4"> <div class="grid-content bg-purple-light"></div> </b-col>
</b-row>
```

### 分栏间隔 gutter

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 示例代码

```vue
<b-row :gutter="20">
    <b-col span="12"><div class="grid-content bg-purple"></div></b-col>
    <b-col span="12"><div class="grid-content bg-purple-light"></div></b-col>
</b-row>
<b-row :gutter="20">
    <b-col span="8"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="8"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="8"> <div class="grid-content bg-purple"></div> </b-col>
</b-row>
<b-row :gutter="20">
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
</b-row>
```

### 偏移量 offset

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

:::tip
通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数
:::

#### 示例代码

```vue
<b-row class="row-bg">
    <b-col span="8" offset="8"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="8"> <div class="grid-content bg-purple"></div> </b-col>
</b-row>
<b-row :gutter="20" class="row-bg">
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6" offset="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
</b-row>
```

### 响应式布局

<ClientOnly>
<grid-demo-4></grid-demo-4>
</ClientOnly>

:::tip
其中手机为默认 `span`
:::

#### 示例代码

```vue
<b-row class="row-bg" :gutter="10">
    <b-col span="6" :ipad="{ span: 6 }" :pc="{ span: 2 }" :narrow-pc="{ span: 4 }" :wide-pc="{ span: 1 }"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6" :ipad="{ span: 6 }" :pc="{ span: 10 }" :narrow-pc="{ span: 8 }" :wide-pc="{ span: 11 }"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6" :ipad="{ span: 6 }" :pc="{ span: 10 }" :narrow-pc="{ span: 8 }" :wide-pc="{ span: 11 }"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6" :ipad="{ span: 6 }" :pc="{ span: 2 }" :narrow-pc="{ span: 4 }" :wide-pc="{ span: 1 }"> <div class="grid-content bg-purple"></div> </b-col>
</b-row>
```

### 对齐方式

<ClientOnly>
<grid-demo-5></grid-demo-5>
</ClientOnly>

:::tip
其中默认为`align='left'`
:::

#### 示例代码

```vue
<b-row class="row-bg" :gutter="10" align="left">
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
</b-row>
<b-row class="row-bg" :gutter="10" align="center">
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
</b-row>
<b-row class="row-bg" :gutter="10" align="right">
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
    <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
</b-row>
```

### Attributes

#### Row

|  参数  |   说明   |      类型      |       可选值        | 默认值 |
| :----: | :------: | :------------: | :-----------------: | :----: |
| gutter |   间距   | String、Number |         --          |   0    |
| align  | 对齐方式 |     String     | left、center、right |  left  |

#### Col

|   参数   |        说明        |      类型      |            可选值            | 默认值 |
| :------: | :----------------: | :------------: | :--------------------------: | :----: |
|   span   |   栅格占据的列数   | String、Number |             1-24             |   --   |
|  offset  | 栅格左侧的间隔格数 | String、Number |             1-24             |   --   |
|   ipad   |  ipad 响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
| narrowPc |  窄屏幕响应式布局  | Number、Object | span 数字或{span:1;offset:1} |   --   |
|    pc    | 普通电脑响应式布局 | Number、Object | span 数字或{span:1;offset:1} |   --   |
|  widePc  |   宽屏响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
