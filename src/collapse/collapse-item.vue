<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" ref="bcontent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueCollapseItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  inject: ['eventBus'],
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
  },
  mounted() {
    if (this.eventBus) {
      const { height } = this.$refs.bcontent.getBoundingClientRect()
      this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
          this.$refs.bcontent.style.height = `${height}px`
        } else {
          this.open = false
          this.$refs.bcontent.style.height = 0
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 30px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    overflow: hidden;
    transition: height 0.5s;
  }
}
</style>
