<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
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
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
  },
}
</script>

<style lang="scss" scoped>
.dark-mode svg {
  fill: white;
}
</style>
