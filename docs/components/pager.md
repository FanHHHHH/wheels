---
title: Pager 分页
---

# Pager 分页

**使用方法**

### 基本用法：

<ClientOnly>
<pager-demo-common></pager-demo-common>
</ClientOnly>

:::tip
本组件会显示`currentPage`的前两页和后两页，以及首页和末页。
:::

#### 示例代码：

```vue
<template>
  <div class="wrapper">
    <b-pager :total-page="20" :hideIfOnePage="false" :current-page.sync="currentPage"></b-pager>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
}
</script>
```

### Attributes

|     参数      |       说明       |  类型   |   可选值    | 默认值 |
| :-----------: | :--------------: | :-----: | :---------: | :----: |
|   totalPage   |      总页数      | Number  |     --      |   --   |
|  currentPage  |    当前选中页    | Number  |     --      |   --   |
| hideIfOnePage | 只有一页是否显示 | Boolean | true、false | false  |
