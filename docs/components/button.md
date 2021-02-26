---
title: Button 按钮
---

# 按钮

**使用方法**

### 基本用法：

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 示例代码：

```vue
<b-button>默认按钮</b-button>
<b-button icon="settings">settings</b-button>
<b-button icon="settings" icon-position="right">settings</b-button>
<b-button loading>loading</b-button>
<b-button disabled>disabled</b-button>
<b-button-group>
    <b-button>默认按钮</b-button>
    <b-button>默认按钮</b-button>
</b-button-group>
```

### Attributes

|     参数     |      说明       |  类型   |                             可选值                             | 默认值 |
| :----------: | :-------------: | :-----: | :------------------------------------------------------------: | :----: |
|     icon     | 设置内置的 icon | String  | setting，info，left，right，download，loading，thumbs-up，down |   --   |
| iconPosition |    图标位置     | String  |                          left、right                           |  left  |
|   loading    |    加载状态     | Boolean |                          true、false                           | false  |
