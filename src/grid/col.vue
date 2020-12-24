<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = (val) => {
  let keys = Object.keys(val);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset", "gutter"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  methods: {
    getClasses(obj, str = "") {
      const res = [];
      if (!obj) {
        return [];
      }
      if (obj.span) {
        res.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        res.push(`offset-${str}${obj.offset}`);
      }
      return res;
    },
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: `${this.gutter / 2}px`,
      };
    },
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;

      return [
        ...this.getClasses({ span, offset }),
        ...this.getClasses(ipad, "ipad-"),
        ...this.getClasses(narrowPc, "narrow-pc-"),
        ...this.getClasses(pc, "pc-"),
        ...this.getClasses(widePc, "wide-pc-"),
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

@media (min-width: 577px) {
  .col {
    $prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
@media (min-width: 769px) {
  .col {
    $prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
@media (min-width: 993px) {
  .col {
    $prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
@media (min-width: 1201px) {
  .col {
    $prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>