---
title: Nav 导航菜单
---

# 导航菜单 Nav

**使用方法**

### 基本用法

<ClientOnly>
<nav-demo-common></nav-demo-common>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div class="wrapper">
    <b-slides :selected.sync="selected">
      <b-slides-item name="1">
        <div class="box1 slide-content-purple">1</div>
      </b-slides-item>
      <b-slides-item name="2">
        <div class="box2 slide-content-purple">2</div>
      </b-slides-item>
      <b-slides-item name="3">
        <div class="box3 slide-content-purple">3</div>
      </b-slides-item>
    </b-slides>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '2',
    }
  },
}
</script>
```

### 自动播放

<ClientOnly>
<slides-demo-settime></slides-demo-settime>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div class="wrapper">
    <b-slides :selected.sync="selected" autoPlay :autoPlayDelay="500">
      <b-slides-item name="1">
        <div class="box1 slide-content-purple">1</div>
      </b-slides-item>
      <b-slides-item name="2">
        <div class="box2 slide-content-purple">2</div>
      </b-slides-item>
      <b-slides-item name="3">
        <div class="box3 slide-content-purple">3</div>
      </b-slides-item>
    </b-slides>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
    }
  },
}
</script>
```

### attributes

#### slides

|     参数      |       说明       |  类型  | 可选值 | 默认值 |
| :-----------: | :--------------: | :----: | :----: | :----: |
|   selected    |     当前选中     | String |  必填  |   --   |
|   autoPlay    |     自动播放     | String |   --   | false  |
| autoPlayDelay | 自动播放延迟时间 | Number |   --   |  3000  |

#### slides-item

| 参数 |    说明     |  类型  | 可选值 | 默认值 |
| :--: | :---------: | :----: | :----: | :----: |
| name | item 的名称 | String |  必填  |   --   |
