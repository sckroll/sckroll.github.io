<script setup lang="ts">;
type PropTypes = {
  to?: string
  external?: boolean
  disabled?: boolean
}

const { disabled } = withDefaults(defineProps<PropTypes>(), {
  external: false,
  disabled: false
})

const emits = defineEmits(['click'])
const handleClick = () => {
  if (!disabled) emits('click')
}
</script>

<template>
  <template v-if="disabled || !to">
    <div class="icon-link" :class="{ disabled }" @click="handleClick">
      <IconBase>
        <slot />
      </IconBase>
    </div>
  </template>
  <template v-else>
    <nuxtLink v-if="external" :href="to" class="icon-link">
      <IconBase>
        <slot />
      </IconBase>
    </nuxtLink>
    <a v-else :to="to" class="icon-link">
      <IconBase>
        <slot />
      </IconBase>
    </a>
  </template>
</template>

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