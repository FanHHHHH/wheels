---
title: popover 弹出框
---

# 弹出框

**使用方法**

### 基础用法

<ClientOnly>
<popover-demo-common></popover-demo-common>
</ClientOnly>

::: tip
支持点击外部关闭
:::

#### 示例代码

```html
<b-popover>
  <b-button>上方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
<b-popover position="right">
  <b-button>右方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
<b-popover position="bottom">
  <b-button>下方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
<b-popover position="left">
  <b-button>左方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
```

### 支持`hover`触发

<ClientOnly>
<popover-demo-trigger></popover-demo-trigger>
</ClientOnly>

#### 示例代码

```html
<b-popover trigger="hover">
  <b-button>上方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
<b-popover position="right" trigger="hover">
  <b-button>右方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
<b-popover position="bottom" trigger="hover">
  <b-button>下方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
<b-popover position="left" trigger="hover">
  <b-button>左方弹出</b-button>
  <template #content>弹出内容</template>
</b-popover>
```

### Attributes

|   参数   |             说明             |  类型  |          可选值          | 默认值 |
| :------: | :--------------------------: | :----: | :----------------------: | :----: |
| position | 设置弹出框相对触发区域的位置 | String | left、right、top、bottom |  top   |
| trigger  |         设置触发模式         | String |       click、hover       | click  |
