---
title: toast
---

# toast

**使用方法**

### 基础用法 this.\$toast

<ClientOnly>
<toast-demo-common></toast-demo-common>
</ClientOnly>

:::tip
注：如果被上层视图遮挡，请自行设置`b-toast-wrapper`的`z-index`。
:::
:::tip
注：文末有本插件具体注册方式
:::

#### 示例代码

```vue
<b-button @click="$toast('这是上方的内容'), { position: 'top' }">上方弹出</b-button>
<b-button @click="$toast('这是中间的内容', { position: 'middle' })">中间弹出</b-button>
<b-button @click="$toast('这是下方的内容', { position: 'bottom' })">下方弹出</b-button>
```

### 设置关闭按钮

<ClientOnly>
<toast-demo-close></toast-demo-close>
</ClientOnly>

#### 示例代码

```vue
<b-button @click="onClickButton">上方弹出</b-button>

<script>
export default {
  methods: {
    onClickButton() {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          },
        },
      })
    },
  },
}
</script>
```

### 支持传入 HTML

<ClientOnly>
<toast-demo-HTML></toast-demo-HTML>
</ClientOnly>

::: danger
:warning: 注意：开启`enableHTML`功能可能会导致 XSS 攻击，请谨慎使用！
:::

#### 示例代码

```vue
<script>
export default {
  methods: {
    onClickButton() {
      this.$toast('<strong id="test">加粗</strong>', { enableHTML: true })
    },
  },
}
</script>
```

### 引入

:::tip
使用此插件需要给 Vue 全局注册`plugin`插件
:::

```vue
<script>
import plugin from ''
import Vue from 'vue'

Vue.use(plugin)
</script>
```

### options

|    参数     |           说明           |  类型   |                    可选值                    |                默认值                |
| :---------: | :----------------------: | :-----: | :------------------------------------------: | :----------------------------------: |
|   message   | 显示内容，函数第一个参数 | String  |                      --                      |                  --                  |
|   object    |   函数接受的第二个参数   | String  | autoClose, closeButton, enableHTML, position |                  --                  |
|  position   |         设置位置         | String  |             top、middle、bottom              |                middle                |
|  autoClose  |       是否自动关闭       | Boolean |                 true、false                  |                 true                 |
| closeButton |       设置关闭按钮       | Object  |                      --                      | {message:'关闭', callback:undefined} |
| enableHTML  |    是否支持 html 内容    | Boolean |                 true、false                  |                false                 |
