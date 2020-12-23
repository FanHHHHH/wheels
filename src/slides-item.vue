<template>
  <transition name="silde">
    <div class="b-slides-item" v-if="visible" :class="{ reverse: reverse }">
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
      reverse: false,
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.silde-enter {
  transform: translateX(100%);
}
.silde-enter.reverse {
  transform: translateX(-100%);
}
.silde-leave-to {
  transform: translateX(-100%);
}
.silde-leave-to.reverse {
  transform: translateX(100%);
}
/* .b-slides-item {
    position: absolute;
} */
</style>
