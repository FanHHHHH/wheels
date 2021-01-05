<template>
  <div class="b-pager">
    <span v-for="(page, index) in pages" :key="index" class="b-pager-item" :class="{ active: page === currentPage, seperator: page === '...' }">
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
  const arr1 = Object.keys(obj).map((val) => parseInt(val))
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

<style lang="scss" scoped>
@import './styles/var';
.b-pager {
  &-item {
    border: 1px solid $grey;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $small-font-size;
    min-width: 20px;
    min-height: 20px;
    margin: 0 4px;
    cursor: pointer;
    &.active,
    &:hover {
      // color: red;
      border-color: $blue;
    }
    &.active {
      cursor: default;
    }
    &.seperator {
      border: none;
    }
  }
}
</style>
