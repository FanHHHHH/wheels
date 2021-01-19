---
title: Nav 导航菜单
---

# 导航菜单 Nav

**使用方法**

### 基本用法

<ClientOnly>
<nav-demo-common></nav-demo-common>
</ClientOnly>

:::tip
`:selected.sync="selected"` 必填。
:::

#### 示例代码

```vue
<template>
  <div class="wrapper">
    <b-nav :selected.sync="selected">
      <b-nav-item name="home">首页 </b-nav-item>
      <b-sub-nav name="about">
        <template #title>关于</template>
        <b-nav-item name="culture"> 企业文化 </b-nav-item>
        <b-nav-item name="developers"> 开发团队 </b-nav-item>
        <b-sub-nav name="contact">
          <template #title>联系方式</template>
          <b-nav-item name="wechat"> 微信 </b-nav-item>
          <b-nav-item name="qq"> QQ </b-nav-item>
          <b-sub-nav name="phone">
            <template #title>手机</template>
            <b-nav-item name="cn"> 电信 </b-nav-item>
            <b-nav-item name="cu"> 联通 </b-nav-item>
            <b-nav-item name="cm"> 移动 </b-nav-item>
          </b-sub-nav>
        </b-sub-nav>
      </b-sub-nav>
      <b-nav-item name="hire"> 招聘</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'home',
    }
  },
}
</script>
```

### 竖向

<ClientOnly>
<nav-demo-vertical></nav-demo-vertical>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div class="wrapper">
    <b-nav :selected.sync="selected" vertical>
      <b-nav-item name="home">首页 </b-nav-item>
      <b-sub-nav name="about">
        <template #title>关于</template>
        <b-nav-item name="culture"> 企业文化 </b-nav-item>
        <b-nav-item name="developers"> 开发团队 </b-nav-item>
        <b-sub-nav name="contact">
          <template #title>联系方式</template>
          <b-nav-item name="wechat"> 微信 </b-nav-item>
          <b-nav-item name="qq"> QQ </b-nav-item>
          <b-sub-nav name="phone">
            <template #title>手机</template>
            <b-nav-item name="cn"> 电信 </b-nav-item>
            <b-nav-item name="cu"> 联通 </b-nav-item>
            <b-nav-item name="cm"> 移动 </b-nav-item>
          </b-sub-nav>
        </b-sub-nav>
      </b-sub-nav>
      <b-nav-item name="hire"> 招聘</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'home',
    }
  },
}
</script>
```

### attributes

#### nav

|   参数   |   说明   |  类型   | 可选值 | 默认值 |
| :------: | :------: | :-----: | :----: | :----: |
| selected | 当前选中 | String  |   --   |   --   |
| vertical | 竖向导航 | Boolean |   --   | false  |

#### nav-item

| 参数 |    说明     |  类型  | 可选值 | 默认值 |
| :--: | :---------: | :----: | :----: | :----: |
| name | item 的名称 | String |  必填  |   --   |

#### sub-nav

| 参数 |      说明      |  类型  | 可选值 | 默认值 |
| :--: | :------------: | :----: | :----: | :----: |
| name | sub-nav 的名称 | String |  必填  |   --   |
