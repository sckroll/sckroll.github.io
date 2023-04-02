<template>
  <path :class="{ extended }" d="M17 2H15V15H2L2 17H15V30H17V17H30V15H17V2Z" />
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
path {
  transform-origin: center;
  transition: transform 0.4s $move-smooth;

  &.extended {
    transform: rotate(-45deg);
  }
}
</style>
