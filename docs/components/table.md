---
title: table 表格
---

# 表格

**使用方法**

:::tip
由于固定表头需要，本组件组要指定列宽度`width`,否则可能产生表头对不齐情况。
:::

### 基本用法：

<ClientOnly>
<table-demo-common></table-demo-common>
</ClientOnly>

#### 示例代码：

```vue
<b-table :data-source="dataSource">
  <b-table-column text="姓名" field="name" :width="300">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <b-table-column text="分数" field="score" :width="80">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <template v-slot="row">
    <button @click="edit(row.item)">编辑</button>
    <button @click="view(row.item)">查看</button>
  </template>
</b-table>

<script>
export default {
  data() {
    return {
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
    }
  },
  methods: {,
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>
```

### 可选中|条纹|边框|紧缩|序号|排序

<ClientOnly>
<table-demo-selected></table-demo-selected>
</ClientOnly>

:::tip
选中请自行查看`selected`数组。

本组件只返回排序方式`asc`,`desc`或者`true`=== 默认 ，需要配合后端完成排序。
:::

#### 示例代码

```vue
<b-table bordered striped checkable indexIsVisable @update:orderBy="x" :selected-items.sync="selected" :order-by.sync="orderBy" :data-source="dataSource">
  <b-table-column text="姓名" field="name" :width="300">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <b-table-column text="分数" field="score" :width="80">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <template v-slot="row">
    <button @click="edit(row.item)">编辑</button>
    <button @click="view(row.item)">查看</button>
  </template>
</b-table>

<script>
export default {
  data() {
    return {
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
    }
  },
  methods: {
    x() {
      console.log('sort callback')
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>
```

### 支持 loading 状态

<ClientOnly>
<table-demo-loading></table-demo-loading>
</ClientOnly>

:::tip
查看效果请点击排序箭头。
:::

#### 示例代码

```vue
<b-table indexIsVisable :loading="loading" @update:orderBy="x" :selected-items.sync="selected" :order-by.sync="orderBy" :data-source="dataSource">
  <b-table-column text="姓名" field="name" :width="300">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <b-table-column text="分数" field="score" :width="80">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <template v-slot="row">
    <button @click="edit(row.item)">编辑</button>
    <button @click="view(row.item)">查看</button>
  </template>
</b-table>

<script>
export default {
  data() {
    return {
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
      loading: false,
    }
  },
  methods: {
    x(e) {
      this.loading = true
      setTimeout(() => {
        this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 2000)
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>
```

### 扩展行

<ClientOnly>
<table-demo-expand></table-demo-expand>
</ClientOnly>

#### 示例代码

```vue
<b-table expandField="description" bordered striped checkable indexIsVisable :loading="loading" @update:orderBy="x" :selected-items.sync="selected" :order-by.sync="orderBy" :data-source="dataSource">
  <b-table-column text="姓名" field="name" :width="300">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <b-table-column text="分数" field="score" :width="80">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <template v-slot="row">
    <button @click="edit(row.item)">编辑</button>
    <button @click="view(row.item)">查看</button>
  </template>
</b-table>

<script>
export default {
  data() {
    return {
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
      loading: false,
    }
  },
  methods: {
    x() {
      console.log('sort callback')
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>
```

### 固定表头

<ClientOnly>
<table-demo-height></table-demo-height>
</ClientOnly>

#### 示例代码

```vue
<b-table :height="200" expandField="description" bordered striped checkable indexIsVisable :loading="loading" @update:orderBy="x" :selected-items.sync="selected" :order-by.sync="orderBy" :data-source="dataSource">
  <b-table-column text="姓名" field="name" :width="300">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <b-table-column text="分数" field="score" :width="80">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <template v-slot="row">
    <button @click="edit(row.item)">编辑</button>
    <button @click="view(row.item)">查看</button>
  </template>
</b-table>

<script>
export default {
  data() {
    return {
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
      loading: false,
    }
  },
  methods: {
    x() {
      console.log('sort callback')
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>
```

### 自定义表格内容

<ClientOnly>
<table-demo-td></table-demo-td>
</ClientOnly>

#### 示例代码

```vue
<b-table :data-source="dataSource">
  <b-table-column text="姓名" field="name" :width="300">
    <template slot-scope="scope">
      <a href="#">{{ scope.value }}</a>
    </template>
  </b-table-column>
  <b-table-column text="分数" field="score" :width="80">
    <template slot-scope="scope">
      {{ scope.value }}
    </template>
  </b-table-column>
  <template v-slot="row">
    <button @click="edit(row.item)">编辑</button>
    <button @click="view(row.item)">查看</button>
  </template>
</b-table>

<script>
export default {
  data() {
    return {
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
      loading: false,
    }
  },
  methods: {
    x() {
      console.log('sort callback')
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>
```

### Attributes

|      参数      |                说明                |  类型   | 可选值 | 默认值 |
| :------------: | :--------------------------------: | :-----: | :----: | :----: |
| selectedItems  |               选中行               |  Array  |   --   |   []   |
|   dataSource   |               行数据               |  Array  |  必填  |   --   |
| indexIsVisable |           行序号是否可见           | Boolean |   --   |  true  |
|    bordered    |            是否有外边框            | Boolean |   --   | false  |
|     tight      |          是否为数据紧缩型          | Boolean |   --   | false  |
|    striped     |             是否有条纹             | Boolean |   --   | false  |
|    orderBy     |           数据行排序方式           | Object  |   --   |   --   |
|    loading     |          是否可见加载状态          | Boolean |   --   | false  |
|     height     | 设置表格高度，高度过小触发固定表头 | Number  |   --   |   --   |
|  expandField   |               扩展行               | String  |   --   |   --   |
|   checkable    |              是否可选              | Boolean |   --   | false  |
