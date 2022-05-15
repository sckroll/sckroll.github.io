<template>
  <div class="text-link">
    <nuxt-link
      v-if="to"
      :to="to"
      class="underline-link"
      :class="{ reversed: isReversed(), fix, thick, selected }"
    >
      <slot></slot>
      <div class="underline-outer" :class="{ visible: underline }">
        <div class="underline-inner"></div>
      </div>
    </nuxt-link>
    <div
      v-else
      class="underline-link"
      :class="{ reversed: isReversed(), fix, thick, selected }"
      @click="onClick"
    >
      <slot></slot>
      <div class="underline-outer" :class="{ visible: underline }">
        <div class="underline-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
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
    selected: {
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
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.text-link {
  display: flex;
}
.underline-link {
  cursor: pointer;
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
    transition: $fade-default;
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
      transition: $fade-default;
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
  &.nuxt-link-active,
  &.selected {
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
  .underline-link {
    &:hover {
      border-bottom: none;

      .underline-inner {
        width: 100%;
      }
    }
    &:active {
      color: $color-secondary;
      transition: $fade-default;
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
        transition: $fade-default;
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
    &.selected {
      .underline-outer {
        &.visible {
          background-color: $color-secondary;
        }
      }
      .underline-inner {
        width: 100%;
      }
    }
  }
}
</style>
