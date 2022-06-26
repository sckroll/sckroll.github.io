<template>
  <div
    class="default-background"
    :class="{ vertical: tags[0] !== 'algorithm' }"
  >
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
  background-color: white;

  &:not(.vertical) {
    display: flex;
  }
  &.vertical {
    .default-pattern {
      width: inherit;
      height: calc(100% / #{$sector});
    }
  }
}
.default-pattern {
  width: calc(100% / #{$sector});
  height: inherit;

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
  &.vue {
    @include get-linear-pattern(#41b883);
  }
  &.nodejs {
    @include get-linear-pattern(#3c873a);
  }
}
</style>
