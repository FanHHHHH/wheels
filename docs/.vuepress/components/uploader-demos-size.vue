<template>
  <div class="wrapper">
    {{ error }}
    <b-uploader accept="image/PNG" :size="1024 * 1024 * 2" @error="error = $event" action="https://g-ui-node-server.herokuapp.com/upload" name="file" method="POST" :parseUrl="parseUrl" :fileList.sync="fileList">
      <b-button>
        <b-icon name="upload"></b-icon>
        点击上传
      </b-button>
    </b-uploader>
  </div>
</template>

<script>
import BUploader from '../../../src/uploader'
import BButton from '../../../src/button/button.vue'
import BIcon from '../../../src/Icon'
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

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>
<style lang="scss">
.b-uploader-list {
  padding-left: 0;
}
</style>
