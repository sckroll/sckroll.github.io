<template>
  <a
    v-if="to && !disabled && !isInternalLink"
    :href="to"
    class="icon-link"
    :class="{ reversed: isReversed(), fix }"
  >
    <slot></slot>
  </a>
  <nuxt-link
    v-else-if="to && !disabled && isInternalLink"
    :to="to"
    class="icon-link"
    :class="{ reversed: isReversed(), fix }"
  >
    <slot></slot>
  </nuxt-link>
  <div
    v-else
    class="icon-link"
    :class="{ reversed: isReversed(), fix, disabled }"
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isScrolled() {
      return this.$store.state.isScrolled
    },
    isInternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('/')
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
      if (!this.disabled) this.$emit('click')
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
  &.disabled {
    cursor: default;
    border: none;

    svg {
      fill: $color-grey-400;
    }
    &:hover,
    &:active {
      border: none;
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
    &.disabled {
      cursor: default;
      border: none;

      svg {
        fill: $color-grey-700;
      }
      &:hover,
      &:active {
        border: none;
      }
    }
  }
}
</style>
