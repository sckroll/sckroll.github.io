<template>
  <div class="underline-link">
    <nuxt-link :to="to" :class="{ reversed: isReversed(), fix }">
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
  },
  computed: {
    isScrolled() {
      return this.$store.state.isScrolled
    },
    isMobileMenuVisible() {
      return this.$store.state.isMobileMenuOpened
    },
  },
  mounted() {
    console.log(this.$colorMode.value)
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
}
.dark-mode {
  a {
    border-bottom: none;

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
      margin-top: 4px;

      &.visible {
        background-color: white;
      }
    }
    .underline-inner {
      width: 0;
      height: 2px;
      background-color: $color-secondary;
      transition: width 0.2s $move-smooth;
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
