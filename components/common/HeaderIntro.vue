<template>
  <div class="header-intro">
    <div class="color-bar"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$bar-width: calc(100vw / 12);

.header-intro {
  position: absolute;
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .color-bar {
    background-color: $color-primary;
    animation: bar-move 12s linear infinite;
  }
}
@keyframes bar-move {
  0% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(100vw);
  }
  90.0001% {
    transform: translateX(-$bar-width);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
