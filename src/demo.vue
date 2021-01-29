<template>
  <div id="app" style="margin: 100px;">
    <b-uploader accept="image/*" action="http://localhost:3000/upload" name="file" method="POST" :parseUrl="parseUrl">
      <button>点击上传</button>
      <template #tips>
        <div>只能上传 300KB 以内的 png、jpeg 文件</div>
      </template>
    </b-uploader>
    <!-- <form id="f" ac="http://127.0.0.1:3000/upload">
      <div>
        <input type="file" name="file" />
      </div>
      <div>
        <input type="submit" value="点击上传" />
      </div>
    </form> -->
    <!-- <div>
      <img id="img" src="" alt="" />
    </div> -->
  </div>
</template>

<script>
import { removeListener } from './click-outside.js'
import BUploader from './uploader.vue'

export default {
  name: 'demo',
  components: {
    BUploader,
  },
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    parseUrl(response) {
      let obj = JSON.parse(response)
      return 'http://localhost:3000/preview/' + obj.id
    },
  },
  mounted() {
    // const f = document.querySelector('#f')
    // const img = document.querySelector('#img')
    // f.addEventListener('submit', (e) => {
    //   // 阻止默认事件
    //   e.preventDefault()
    //   var formData = new FormData(f)
    //   // const fileInput = document.querySelector('input[name="xxx"]')
    //   // formData
    //   console.log(f.ac)
    //   var xhr = new XMLHttpRequest()
    //   xhr.open('POST', 'https://g-ui-node-server.herokuapp.com/upload')
    //   xhr.onload = () => {
    //     img.src = `https://g-ui-node-server.herokuapp.com/preview/${xhr.response}`
    //   }
    //   xhr.send(formData)
    // })
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
