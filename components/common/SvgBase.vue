<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="icon ? '0 0 32 32' : `0 0 ${width} ${height}`"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: 'black',
    },
    width: {
      type: [String, Number],
      default: 32,
    },
    height: {
      type: [String, Number],
      default: 32,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.dark-mode svg {
  fill: white;
}
</style>
