<template>
  <g :class="{ opened }">
    <path class="line-1" d="M2 5H30V7H2V5Z" />
    <path class="line-2" d="M2 15H30V17H2V15Z" />
    <path class="line-3" d="M2 25H30V27H2V25Z" />
  </g>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.line-1,
.line-2,
.line-3 {
  transform-origin: center;
  transition: transform 0.4s $move-smooth;
}
.opened {
  .line-1 {
    transform: translate(-7px, 7px) rotate(45deg);
  }
  .line-2 {
    transform: rotate(45deg);
  }
  .line-3 {
    transform: translate(-7px, -7px) rotate(-45deg);
  }
}
</style>
