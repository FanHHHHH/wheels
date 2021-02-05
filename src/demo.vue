<template>
  <div id="app" >
    <b-sticky distance="100">
      <div style="border: 1px solid red">内容</div>
    </b-sticky>
    <div>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <p>段落10</p>
      <p>段落11</p>
      <p>段落12</p>
      <p>段落13</p>
      <p>段落14</p>
      <p>段落15</p>
    </div>
  </div>
</template>

<script>
import { removeListener } from './click-outside.js'
import BUploader from './uploader.vue'
import BButton from './button/button.vue'
import BIcon from './Icon.vue'
import BSticky from './sticky.vue'
export default {
  name: 'demo',
  components: {
    BSticky,
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
