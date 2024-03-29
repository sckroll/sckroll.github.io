<template>
  <nuxt-link
    v-if="internal && to && !disabled"
    :to="to"
    class="icon-link"
    :class="{ reversed: isReversed(), fix, responsive }"
  >
    <slot></slot>
  </nuxt-link>
  <a
    v-else-if="to && !disabled"
    :href="to"
    class="icon-link"
    :class="{ reversed: isReversed(), fix, responsive }"
  >
    <slot></slot>
  </a>
  <div
    v-else
    class="icon-link"
    :class="{ reversed: isReversed(), fix, disabled, responsive }"
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
    internal: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    responsive: {
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
    color: $color-primary;

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
      color: $color-secondary;

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
      color: $color-secondary;

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
        color: $color-primary;

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

@include viewpoint-md {
  .icon-link.responsive {
    width: 32px;
    height: 32px;
  }
}
@include viewpoint-sm {
  .icon-link.responsive {
    width: 32px;
    height: 32px;
  }
}
@include viewpoint-xs {
  .icon-link.responsive {
    width: 32px;
    height: 32px;
  }
}
</style>
