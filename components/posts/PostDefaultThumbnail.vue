<template>
  <!-- <canvas ref="canvas" :width="width" :height="height"></canvas> -->
  <div class="default-background">
    <div
      v-for="num in numArray"
      :key="num"
      class="default-pattern"
      :class="[`pattern-bar-${num}`, `${tags[2]}`]"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sector: 16,
    }
  },
  computed: {
    numArray() {
      return new Array(this.sector).fill(0).map((_, index) => index + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
$sector: 16;

@mixin get-linear-pattern($color) {
  &.pattern-bar {
    @for $i from 1 through $sector {
      &-#{$i} {
        background-color: rgba($color, calc(#{$i} / #{$sector}));
      }
    }
  }
}

.default-background {
  width: inherit;
  height: inherit;
  display: flex;
  background-color: white;
}
.default-pattern {
  width: calc(100% / #{$sector});
  height: inherit;
  /* width: inherit;
  height: calc(100% / #{$sector}); */

  @include get-linear-pattern($color-primary);
  &.java {
    @include get-linear-pattern(#f89820);
  }
  &.python {
    @include get-linear-pattern(#306998);
  }
  &.javascript {
    @include get-linear-pattern(#f7df1e);
  }
}
</style>
