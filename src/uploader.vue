<template>
  <div class="b-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <slot name="tips"></slot>
    <div class="clickButton" ref="clickButton"></div>
    <ul>
      <li v-for="file in fileList" :key="file.name">
        <img width="100" height="100" :src="file.url" alt="" />
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlueUploader',
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
  },
  data() {
    return {
      url: 'about:blank',
    }
  },
  methods: {
    onClickUpload() {
      // create input
      const input = document.createElement('input')
      input.type = 'file'
      this.$refs.clickButton.appendChild(input)
      input.addEventListener('change', () => {
        // update file
        let file = input.files[0]
        const { name: name0, type, size } = file
        let formData = new FormData()
        formData.append(this.name, file) // 获取文件名
        const xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          // 上传完毕
          // 反序列化
          let url = this.parseUrl(xhr.response)
          let name = name0
          while (this.fileList.filter((item) => item.name === name).length > 0) {
            const idx = name.lastIndexOf('.')
            const left = name.substring(0, idx)
            const right = name.substring(idx, name.length)
            name = left + '(1)' + right
          }
          this.$emit('update:fileList', [...this.fileList, { name, type, size, url }])
        }
        xhr.send(formData)
      })
      input.click()
      input.remove()
    },
  },
}
</script>

<style lang="scss" scoped>
.b-uploader {
}
</style>
