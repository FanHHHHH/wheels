<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GToast",
};
</script>

<style lang="scss" socped>
$font-size: 14px;
$font-color: #fff;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
.toast {
  font-size: $font-size;
  color:$font-color;
  height: $toast-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-bg;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 3px 0px;
  padding: 16px;
  border-radius: 4px;
}
</style>