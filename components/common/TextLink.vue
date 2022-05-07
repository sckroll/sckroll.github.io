<template>
  <div class="underline-link">
    <nuxt-link :to="to" :class="{ reversed: isReversed(), fix, thick }">
      <slot></slot>
      <div class="underline-outer" :class="{ visible: underline }">
        <div class="underline-inner"></div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    scroll: {
      type: Boolean,
      default: false,
    },
    fix: {
      type: Boolean,
      default: false,
    },
    thick: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isScrolled() {
      return this.$store.state.isScrolled
    },
  },
  methods: {
    isReversed() {
      if (this.reverse) {
        return !(this.scroll && this.isScrolled)
      } else {
        return this.scroll && this.isScrolled
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.underline-link {
  display: flex;
}
a {
  border-bottom: none;
  margin-top: 6px;

  &:hover {
    border-bottom: none;

    .underline-inner {
      width: 100%;
    }
  }
  &:active {
    color: $color-primary;
  }
  .underline-outer {
    margin-top: 4px;

    &.visible {
      background-color: black;
    }
  }
  .underline-inner {
    width: 0;
    height: 2px;
    background-color: $color-primary;
    transition: width 0.2s $move-smooth;
  }
  &.reversed {
    &:active {
      color: $color-secondary;
    }
    .underline-outer {
      &.visible {
        background-color: white;
      }
    }
    .underline-inner {
      background-color: $color-secondary;
    }
  }
  &.thick {
    margin-top: 8px;

    .underline-inner {
      height: 4px;
    }
  }
  &.nuxt-link-active {
    .underline-outer {
      &.visible {
        background-color: $color-primary;
      }
    }
    .underline-inner {
      width: 100%;
    }
  }
}
.dark-mode {
  a {
    &:hover {
      border-bottom: none;

      .underline-inner {
        width: 100%;
      }
    }
    &:active {
      color: $color-secondary;
    }
    .underline-outer {
      &.visible {
        background-color: white;
      }
    }
    .underline-inner {
      background-color: $color-secondary;
    }
    &.reversed:not(.fix) {
      &:active {
        color: $color-primary;
      }
      .underline-outer {
        &.visible {
          background-color: black;
        }
      }
      .underline-inner {
        background-color: $color-primary;
      }
    }
  }
}
</style>
