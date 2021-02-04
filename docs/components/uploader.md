---
title: uploader 上传组件
---

# 上传组件

**使用方法**

### 基本用法：

<ClientOnly>
<uploader-demos-common></uploader-demos-common>
</ClientOnly>

#### 示例代码：

```html
<b-uploader action="https://g-ui-node-server.herokuapp.com/upload" name="file" method="POST" :parseUrl="parseUrl" :fileList.sync="fileList">
  <b-button>
    <b-icon name="upload"></b-icon>
    点击上传
  </b-button>
</b-uploader>

<script>
  export default {
    components: {
      BUploader,
      BButton,
      BIcon,
    },
    data() {
      return {
        fileList: [],
      }
    },
    methods: {
      parseUrl(response) {
        let obj = JSON.parse(response)
        return 'https://g-ui-node-server.herokuapp.com/preview/' + obj.id
      },
    },
  }
</script>
```

### 多文件上传：

<ClientOnly>
<uploader-demos-multiple></uploader-demos-multiple>
</ClientOnly>

#### 示例代码：

```vue
<b-uploader multiple action="https://g-ui-node-server.herokuapp.com/upload" name="file" method="POST" :parseUrl="parseUrl" :fileList.sync="fileList">
  <b-button>
    <b-icon name="upload"></b-icon>
    点击上传
  </b-button>
</b-uploader>

<script>
export default {
  components: {
    BUploader,
    BButton,
    BIcon,
  },
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    parseUrl(response) {
      let obj = JSON.parse(response)
      return 'https://g-ui-node-server.herokuapp.com/preview/' + obj.id
    },
  },
}
</script>
```

### 限制文件大小和文件类型

<ClientOnly>
<uploader-demos-size></uploader-demos-size>
</ClientOnly>

#### 示例代码

```html
{{ error }}
<b-uploader accept="image/PNG" :size="1024 * 1024 * 2" @error="error = $event" action="https://g-ui-node-server.herokuapp.com/upload" name="file" method="POST" :parseUrl="parseUrl" :fileList.sync="fileList">
  <b-button>
    <b-icon name="upload"></b-icon>
    点击上传
  </b-button>
</b-uploader>

<script>
  export default {
    components: {
      BUploader,
      BButton,
      BIcon,
    },
    data() {
      return {
        fileList: [],
        error: '',
      }
    },
    methods: {
      parseUrl(response) {
        let obj = JSON.parse(response)
        return 'https://g-ui-node-server.herokuapp.com/preview/' + obj.id
      },
    },
  }
</script>
```

### Attributes

|   参数   |       说明       |   类型   | 可选值 | 默认值 |
| :------: | :--------------: | :------: | :----: | :----: |
|   name   |   上传的文件名   |  String  |   --   |  必填  |
| multiple |  是否支持多文件  | Boolean  |   --   | false  |
|  action  |     上传地址     |  String  |   --   |  必填  |
|  method  |     请求方式     |  String  |   --   |  post  |
| parseUrl |  返回值地址转换  | Function |   --   |  必填  |
| fileList |   已上传的图片   |  Array   |   --   |  必填  |
|   size   | 规定文件最大尺寸 |  Number  |   --   |   2M   |
|  accept  |  可上传文件类型  |  String  |   --   | \*/\*  |
