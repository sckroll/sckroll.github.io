<template>
  <div
    class="header-intro"
    :style="`grid-template-columns: repeat(${columns}, 1fr)`"
  >
    <div
      v-for="(num, index) in randomNums"
      :key="index"
      :class="`color-bar bar-${num.delay} speed-${num.speed}`"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: 24,
    }
  },
  computed: {
    randomNums() {
      const arr = []
      for (let i = 0; i < this.columns; i++) {
        arr.push({
          speed: Math.floor(Math.random() * this.columns),
          delay: Math.floor(Math.random() * this.columns),
        })
      }
      return arr
    },
  },
}
</script>

<style lang="scss" scoped>
$max-columns: 48;

@keyframes bar-blink {
  0% {
    filter: brightness(100%);
  }
  100% {
    filter: brightness(60%);
  }
}
@mixin asdf {
  @for $i from 1 through $max-columns {
    .bar-#{$i} {
      animation-delay: calc(#{$i}s * 0.05);
    }
    .speed-#{$i} {
      animation-duration: calc(1s + #{$i}s * 0.05);
    }
  }
}
@include asdf;

.header-intro {
  position: absolute;
  width: 100%;
  height: 70vh;
  display: grid;

  .color-bar {
    background-color: $color-primary;
    animation-name: bar-blink;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}
</style>
