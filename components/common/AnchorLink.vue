<template>
  <div class="underline-link">
    <nuxt-link :to="to">
      <slot></slot>
      <div class="underline-outer">
        <div class="underline-inner"></div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.underline-link {
  display: flex;
}
a {
  border-bottom: none;

  &:hover {
    border-bottom: none;

    .underline-inner {
      width: 100%;
    }
  }
  &:active {
    color: $color-secondary;
  }
  .underline-outer {
    margin-top: 4px;
    background-color: white;
  }
  .underline-inner {
    width: 0;
    height: 2px;
    background-color: $color-secondary;
    transition: width 0.2s $move-smooth;
  }
}
</style>
