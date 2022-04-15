<template>
  <div class="header-intro">
    <SvgBase
      width="96"
      height="96"
      :style="`top: ${getRandomTop()}px; left: ${getRandomleft()}px`"
    >
      <ShapeArch></ShapeArch>
    </SvgBase>
    <SvgBase
      width="96"
      height="96"
      :style="`top: ${getRandomTop()}px; left: ${getRandomleft()}px`"
    >
      <ShapeSquare></ShapeSquare>
    </SvgBase>
    <SvgBase
      width="96"
      height="96"
      :style="`top: ${getRandomTop()}px; left: ${getRandomleft()}px`"
    >
      <ShapeCircle></ShapeCircle>
    </SvgBase>
    <SvgBase
      width="96"
      height="96"
      :style="`top: ${getRandomTop()}px; left: ${getRandomleft()}px`"
    >
      <ShapeQuarterCircle></ShapeQuarterCircle>
    </SvgBase>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positions: new Set(),
    }
  },
  methods: {
    getRandomTop() {
      return Math.floor(Math.random() * 7) * 96
    },
    getRandomleft() {
      return Math.floor(Math.random() * 14) * 96
    },
  },
}
</script>

<style lang="scss" scoped>
.header-intro {
  position: absolute;
  width: 1200px;
  height: 70vh;

  svg {
    position: absolute;
    top: -96px;
    left: -96px;
  }

  path,
  g,
  circle {
    stroke: rgba(white, 0.15);
  }
  path,
  g {
    transform-origin: 50% 50%;
    animation: clockwise 4s ease infinite;
  }
}
@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
