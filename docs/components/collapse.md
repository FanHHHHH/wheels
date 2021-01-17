---
title: Collapse 折叠面板
---

# Collapse 折叠面板

**使用方法**

### 基本用法

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

#### 示例代码

```vue
<b-collapse :selected.sync="selectedTab" single>
    <b-collapse-item title="标题1" name="1">hello，你好呢。</b-collapse-item>
    <b-collapse-item title="标题2" name="2">你知道我在想你吗?</b-collapse-item>
    <b-collapse-item title="标题3" name="3">我在等你呀!</b-collapse-item>
</b-collapse>

<script>
export default {
  data() {
    return {
      selectedTab: ['1'],
    }
  },
}
</script>
```

### 多展开

<ClientOnly>
<collapse-demo-multi></collapse-demo-multi>
</ClientOnly>

#### 示例代码

```html
<b-collapse :selected.sync="selectedTab">
  <b-collapse-item title="标题1" name="1">hello，你好呢。</b-collapse-item>
  <b-collapse-item title="标题2" name="2">你知道我在想你吗?</b-collapse-item>
  <b-collapse-item title="标题3" name="3">我在等你呀!</b-collapse-item>
</b-collapse>
```

### Attributes

#### Collapse

|   参数   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
| selected |    选中项    |  Array  |     --      |   []   |
|  single  | 是否单一展示 | boolean | true、false | false  |

#### CollapseItem

| 参数  |      说明      |  类型  | 可选值 | 默认值 |
| :---: | :------------: | :----: | :----: | :----: |
| title |      标题      | String |   --   |   --   |
| name  | 唯一标识，必填 | String |   --   |   --   |
