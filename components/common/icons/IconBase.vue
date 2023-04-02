<script setup lang="ts">
type PropTypes = {
  size?: number
  fill?: string
}

withDefaults(defineProps<PropTypes>(), {
  size: 32,
  fill: 'black'
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  transition: all 0.15s;
}
.dark-mode svg {
  fill: white;
}
</style>