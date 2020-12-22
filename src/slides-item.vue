<template>
  <transition name="silde">
    <div class="b-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    visible() {
      return this.selected === this.name
    },
  },
}
</script>

<style>
.silde-enter-active,
.silde-leave-active {
  transition: all 1s;
}
.silde-leave-active {
  position: absolute;
}
.silde-enter {
  transform: translateX(100%);
}
.silde-leave-to {
  transform: translateX(-100%);
}
/* .b-slides-item {
    position: absolute;
} */
</style>
