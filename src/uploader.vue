<template>
  <div class="b-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <slot name="tips"></slot>
    <div class="clickButton" ref="clickButton"></div>
    <ul class="b-uploader-list">
      <li v-for="file in fileList" :key="file.name">
        <div v-if="file.status === 'pending'" class=" b-uploader-loading">
          <b-icon name="loading"></b-icon>
        </div>
        <div class="b-uploader-image" v-else-if="file.type.indexOf('image') === 0">
          <img :src="file.url" alt="" />
        </div>
        <div v-else class="b-uploader-defaultImage"></div>
        <span class="b-uploader-fileName" :class="{ [file.status]: true }">
          {{ file.name }}
        </span>
        <b-button class="b-uploader-remove" @click="onRemoveFile(file)">x</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
import BButton from './button/button.vue'
import BIcon from './Icon.vue'
export default {
  name: 'BlueUploader',
  components: {
    BButton,
    BIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: 'POST',
    },
    parseUrl: {
      type: Function,
      required: true,
    },
    fileList: {
      type: Array,
      default: [],
    },
    size: {
      type: Number,
    },
  },
  data() {
    return {}
  },
  methods: {
    onRemoveFile(file) {
      if (window.confirm('您确定要删除当前项吗？')) {
        const fileList = [...this.fileList]
        const idx = fileList.indexOf(file)
        fileList.splice(idx, 1)
        this.$emit('update:fileList', fileList)
      }
    },
    generateName(name) {
      while (this.fileList.filter((item) => item.name === name).length > 0) {
        const idx = name.lastIndexOf('.')
        const left = name.substring(0, idx)
        const right = name.substring(idx, name.length)
        name = left + '(1)' + right
      }
      return name
    },
    beforeUpdateFile(file, name) {
      let { size, type } = file
      if (size > this.size) {
        this.$emit('error', '文件大小超过2M')
        return false
      } else {
        this.$emit('update:fileList', [...this.fileList, { name, size, type, url: '', status: 'pending' }])
        return true
      }
    },
    onClickUpload() {
      // create input
      const input = document.createElement('input')
      input.type = 'file'
      this.$refs.clickButton.appendChild(input)
      input.addEventListener('change', () => {
        // update file
        let file = input.files[0]
        const { name: name0, type, size } = file
        let name = name0
        name = this.generateName(name0)

        if (!this.beforeUpdateFile(file, name)) {
          return
        }

        let formData = new FormData()
        formData.append(this.name, file) // 获取文件名
        const xhr = new XMLHttpRequest()
        // 上传失败测试代码
        // setTimeout(() => {
        //   this.afterUpdateFile(name, xhr.response, 'fail')
        // }, 0)
        // return
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          // 上传成功
          this.afterUpdateFile(name, xhr.response, 'success')
        }
        xhr.onerror = () => {
          // 上传失败
          this.afterUpdateFile(name, xhr.response, 'fail')
          if (xhr.status === 0) {
            this.$emit('error', '请检查网络连接')
          }
        }
        xhr.send(formData)
      })
      input.click()
      input.remove()
    },
    afterUpdateFile(name, response, status) {
      let url = ''
      if (status === 'success') {
        url = this.parseUrl(response)
      }
      const obj = this.fileList.filter((item) => item.name === name)[0]
      let idx = this.fileList.indexOf(obj)
      const copy = JSON.parse(JSON.stringify(obj))

      copy.url = url
      copy.status = status
      const newFileList = JSON.parse(JSON.stringify(this.fileList))
      newFileList.splice(idx, 1, copy)
      this.$emit('update:fileList', newFileList)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/var';
.b-uploader {
  &-list {
    & > li {
      list-style-type: none;
      border: 1px solid $grey;
      display: flex;
      align-items: center;
      border-radius: $border-radius;
    }
  }
  &-remove {
    margin-left: auto;
  }
  &-defaultImage {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  &-image {
    margin-right: 8px;
    & > img {
      width: 32px;
      height: 32px;
    }
  }
  &-loading {
    @include spin;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  &-fileName {
    &.success {
      color: darken($blue, 10%);
    }
    &.fail {
      color: $red;
    }
  }
}
</style>
