---
title: cascader 级联选择器
---

# 级联选择器

**使用方法**

### 基本用法：

<ClientOnly>
<cascader-demo-common></cascader-demo-common>
</ClientOnly>

#### 示例代码：

```vue
<template>
  <div class="wrapper">
    <b-cascader :source="source" :selected.sync="selected"></b-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      source: [
        {
          name: '江苏',
          children: [{ name: '苏州', children: [{ name: '吴江' }, { name: '姑苏' }, { name: '工业园区' }] }, { name: '盐城', children: [{ name: '大丰' }, { name: '建湖' }] }, { name: '宿迁' }],
        },
        { name: '浙江', children: [{ name: '杭州', children: [{ name: '余杭' }] }, { name: '湖州' }, { name: '绍兴' }] },
      ],
      selected: [],
    }
  },
}
</script>
```

### 动态加载

<ClientOnly>
<cascader-demo-load></cascader-demo-load>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div class="wrapper">
    <b-cascader :source.sync="source" :selected.sync="selected" popover-height="200px" :loadData="loadData"></b-cascader>
  </div>
</template>

<script>
function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      result.forEach((node) => {
        if (db.filter((item) => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300)
  })
}

export default {
  data() {
    return {
      source: [],
      selected: [],
    }
  },
  methods: {
    loadData(node, updateSource) {
      let { id } = node
      ajax(id).then((result) => {
        updateSource(result)
      })
    },
  },
  created() {
    ajax(0).then((result) => {
      this.source = result
    })
  },
}
</script>
```

### Attributes

|     参数      |          说明          |   类型   | 可选值 | 默认值 |
| :-----------: | :--------------------: | :------: | :----: | :----: |
|   selected    | 选中项（包含整个路径） |  Array   |   --   |   --   |
|    source     |         数据源         |  Array   |   --   |   --   |
| popoverHeight |       下拉框高度       |  String  |   --   |   --   |
|   loadData    |      加载数据方法      | Function |   --   |   --   |
