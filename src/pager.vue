<template>
  <div class="blue-pager">
    <span v-for="(page, index) in pages" :key="index">
      {{ page }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BluePager',
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hideIfOnePage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    let pages = [1, this.totalPage, this.currentPage - 1, this.currentPage - 2, this.currentPage, this.currentPage + 1, this.currentPage + 2]
    pages.sort((a, b) => a - b)
    const pages_r = uniqueAndAddDot(pages)
    return {
      pages: pages_r,
    }
  },
}
function uniqueAndAddDot(arr) {
  let obj = {}
  arr.map((val) => {
    if (val > 0) {
      obj[val] = true
    }
  })
  const arr1 = Object.keys(obj)
  let res = arr1.reduce((prev, curr, index) => {
    prev.push(curr)
    if (arr1[index + 1] && arr1[index + 1] - arr1[index] > 1) {
      prev.push('...')
    }
    return prev
  }, [])
  return res
}
</script>

<style lang="scss" scoped></style>
