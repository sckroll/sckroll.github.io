<template>
  <a
    v-if="to"
    :href="to"
    class="icon-link"
    :class="{ reversed: isReversed(), fix }"
  >
    <slot></slot>
  </a>
  <div
    v-else
    class="icon-link"
    :class="{ reversed: isReversed(), fix }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
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
    to: {
      type: [String, Boolean],
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
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-link {
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 0.15s ease;

  svg {
    fill: black;
  }
  &:hover {
    border: 2px solid rgba(black, 0.5);
  }
  &:active {
    border: 2px solid $color-primary;

    svg {
      fill: $color-primary;
    }
  }
  &.reversed {
    svg {
      fill: white;
    }
    &:hover {
      border: 2px solid rgba(white, 0.5);
    }
    &:active {
      border: 2px solid $color-secondary;

      svg {
        fill: $color-secondary;
      }
    }
  }
}
.dark-mode {
  .icon-link {
    svg {
      fill: white;
    }
    &:hover {
      border: 2px solid rgba(white, 0.5);
    }
    &:active {
      border: 2px solid $color-secondary;

      svg {
        fill: $color-secondary;
      }
    }
    &.reversed:not(.fix) {
      svg {
        fill: black;
      }
      &:hover {
        border: 2px solid rgba(black, 0.5);
      }
      &:active {
        border: 2px solid $color-primary;

        svg {
          fill: $color-primary;
        }
      }
    }
  }
}
</style>
