<template>
  <div class="b-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <slot name="tips"></slot>
    <div class="clickButton" ref="clickButton"></div>
    <ul>
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'pending'">菊花</template>
        <img width="100" height="100" :src="file.url" alt="" />{{ file.name }}
        <button @click="onRemoveFile(file)">x</button>
        <span>{{ file.status }}</span>
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
      this.$emit('update:fileList', [...this.fileList, { name, size, type, url: '', status: 'pending' }])
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

        this.beforeUpdateFile(file, name)

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
        // xhr.onerror = () => {
        //   this.afterUpdateFile(name, xhr.response, 'fail')
        // }
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
      console.log(obj)
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
.b-uploader {
}
</style>
