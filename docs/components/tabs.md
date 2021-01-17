---
title: tabs 标签页
---

# 标签页

**使用方法**

### 基本用法

<ClientOnly>
<tabs-demo-common></tabs-demo-common>
</ClientOnly>

#### 示例代码

```vue
<b-tabs selected="finance">
  <b-tabs-nav>
    <b-tabs-item name="news">新闻</b-tabs-item>
    <b-tabs-item name="finance">财经</b-tabs-item>
    <b-tabs-item name="sports" disabled>体育</b-tabs-item>
    <template #actions>
      <b-button>actions</b-button>
    </template>
  </b-tabs-nav>
  <b-tabs-content>
    <b-tabs-pane name="news">新闻内容</b-tabs-pane>
    <b-tabs-pane name="finance">财经内容</b-tabs-pane>
    <b-tabs-pane name="sports">体育内容</b-tabs-pane>
  </b-tabs-content>
</b-tabs>
```

### Attributes

#### Tabs

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 当前选中 | String |  name  |   --   |

#### TabsHeadItem

|   参数   |      说明      |  类型   |   可选值    | 默认值 |
| :------: | :------------: | :-----: | :---------: | :----: |
|   name   | 唯一标识，必选 | String  |     --      |   --   |
| disabled |  设置是否禁用  | Boolean | true、false | false  |

#### TabsBodyPane

| 参数 |      说明      |  类型  | 可选值 | 默认值 |
| :--: | :------------: | :----: | :----: | :----: |
| name | 唯一标识，必选 | String |   --   |   --   |
