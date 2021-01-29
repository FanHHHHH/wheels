<template>
  <div class="b-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <slot name="tips"></slot>
    <div class="clickButton" ref="clickButton"></div>
    <img :src="url" />
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
  },
  data() {
    return {
      url: '',
    }
  },
  methods: {
    onClickUpload() {
      const input = document.createElement('input')
      input.type = 'file'
      this.$refs.clickButton.appendChild(input)
      input.addEventListener('change', () => {
        let file = input.files[0]
        let formData = new FormData()
        formData.append(this.name, file) // 获取文件名

        const xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          // 上传完毕
          console.log('xhr返回', xhr.response)
          // 反序列化
          let obj = JSON.parse(xhr.response)
          this.url = 'http://localhost:3000/preview/' + obj.id
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
