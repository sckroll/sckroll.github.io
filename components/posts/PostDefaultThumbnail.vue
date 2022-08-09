<template>
  <div class="default-background">
    <div
      class="default-pattern"
      :class="{ [tags[2]]: tags[2], vertical: tags[0] !== 'algorithm' }"
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
}
</script>

<style lang="scss" scoped>
$java: #f89820;
$python: #306998;
$javascript: #f7df1e;
$vue: #41b883;
$nodejs: #3c873a;

@mixin get-horizontal-linear-pattern($color) {
  background: linear-gradient(
    to right,
    rgba($color, 0.1) 10%,
    rgba($color, 0.2) 10% 20%,
    rgba($color, 0.3) 20% 30%,
    rgba($color, 0.4) 30% 40%,
    rgba($color, 0.5) 40% 50%,
    rgba($color, 0.6) 50% 60%,
    rgba($color, 0.7) 60% 70%,
    rgba($color, 0.8) 70% 80%,
    rgba($color, 0.9) 80% 90%,
    rgba($color, 1) 90%
  );
}
@mixin get-vertical-linear-pattern($color) {
  background: linear-gradient(
    to bottom,
    rgba($color, 0.1) 10%,
    rgba($color, 0.2) 10% 20%,
    rgba($color, 0.3) 20% 30%,
    rgba($color, 0.4) 30% 40%,
    rgba($color, 0.5) 40% 50%,
    rgba($color, 0.6) 50% 60%,
    rgba($color, 0.7) 60% 70%,
    rgba($color, 0.8) 70% 80%,
    rgba($color, 0.9) 80% 90%,
    rgba($color, 1) 90%
  );
}

.default-background {
  background-color: white;
}
.default-pattern {
  height: 100%;
  @include get-horizontal-linear-pattern($color-primary);

  &.vertical {
    @include get-vertical-linear-pattern($color-primary);
  }
  &.java {
    @include get-horizontal-linear-pattern($java);

    &.vertical {
      @include get-vertical-linear-pattern($java);
    }
  }
  &.python {
    @include get-horizontal-linear-pattern($python);

    &.vertical {
      @include get-vertical-linear-pattern($python);
    }
  }
  &.javascript {
    @include get-horizontal-linear-pattern($javascript);

    &.vertical {
      @include get-vertical-linear-pattern($javascript);
    }
  }
  &.vue {
    @include get-horizontal-linear-pattern($vue);

    &.vertical {
      @include get-vertical-linear-pattern($vue);
    }
  }
  &.nodejs {
    @include get-horizontal-linear-pattern($nodejs);

    &.vertical {
      @include get-vertical-linear-pattern($nodejs);
    }
  }
}
</style>
