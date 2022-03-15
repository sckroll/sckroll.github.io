<template>
  <div class="toggle-switch" :class="{ toggled: value }" @click="toggle">
    <div class="knob" :class="{ toggled: value }"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-switch {
  cursor: pointer;
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  border: 2px solid white;
  border-radius: 12px;
  padding: 2px;
  transition: background-color 0.15s ease;

  &.toggled {
    background-color: $color-primary;
  }
}
.knob {
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 8px;
  transition: transform 0.15s ease;

  &.toggled {
    transform: translateX(150%);
  }
}
</style>
