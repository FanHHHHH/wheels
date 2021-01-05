<template>
  <div class="b-pager">
    <span class="b-pager-nav prev" :class="{ disabled: currentPage === 1 }">
      <b-icon name="left"></b-icon>
    </span>
    <template v-for="(page, index) in pages" class="b-pager-item">
      <template v-if="page === currentPage">
        <span class="b-pager-item active" :key="index">
          {{ page }}
        </span>
      </template>
      <template v-else-if="page === '...'">
        <b-icon class="b-pager-item seperator" name="dots" :key="index"></b-icon>
      </template>
      <template v-else>
        <span :key="index" class="b-pager-item others">
          {{ page }}
        </span>
      </template>
    </template>
    <span class="b-pager-nav next" :class="{ disabled: currentPage === totalPage }" @click="onClickPage">
      <b-icon name="right"></b-icon>
    </span>
  </div>
</template>

<script>
import BIcon from './Icon.vue'
export default {
  name: 'BluePager',
  components: { BIcon },
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
    const pages_r = uniqueAndAddDot.call(this, pages)
    return {
      pages: pages_r,
    }
  },
}
function uniqueAndAddDot(arr) {
  let obj = {}
  arr.map((val) => {
    if (val > 0 && val <= this.totalPage) {
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
  $min-width: 20px;
  $min-height: 20px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  &-nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $small-font-size;
    min-width: $min-width;
    min-height: $min-height;
    border: 1px solid $grey;
    border-radius: $border-radius;
    margin: 0 4px;
    &:hover {
      border: 1px solid $blue;
    }
    &.disabled {
      svg {
        fill: darken($grey, 30%);
      }
      background: $grey;
      border: none;
      cursor: default;
    }
  }
  &-item {
    min-width: $min-width;
    min-height: $min-height;
    border: 1px solid $grey;
    border-radius: $border-radius;
    padding: 0 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $small-font-size;
    margin: 0 4px;
    cursor: pointer;
    &.active,
    &:hover {
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
