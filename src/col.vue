<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    phone: {
      type: Object,
      validator(val) {
        let keys = Object.keys(val);
        let valid = true;
        keys.forEach((key) => {
          if (!["span", "offset", "gutter"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      },
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: `${this.gutter / 2}px`,
      };
    },
    colClass() {
      let { span, offset, phone } = this;
      let phoneClass = [];
      if (phone) {
        phoneClass = [`col-phone-${phone.span}`];
      }
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...phoneClass,
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  $prefix: col-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

@media (max-width: 576px) {
  .col {
    $prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>