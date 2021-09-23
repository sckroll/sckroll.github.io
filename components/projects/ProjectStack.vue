<template>
  <span :class="{ [stackClassName]: stackClassName }">{{ stack }}</span>
</template>

<script>
export default {
  props: {
    stack: {
      type: String,
      required: true,
    },
  },
  computed: {
    stackClassName() {
      return this.stack.toLowerCase().replace('.', '-').split(' ')[0]
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  margin-right: 8px;
  padding: 4px 0;
  border-bottom: 3px solid $color-grey-4;

  &:last-child {
    margin-right: 0;
  }
  &.javascript {
    border-image: linear-gradient(to right, #f0db4f 50%, #323330 50%) 1;
  }
  &.vue-js {
    border-image: linear-gradient(to right, #42b883 50%, #35495e 50%) 1;
  }
  &.nuxt-js {
    border-image: linear-gradient(to right, #00dc82 50%, #002e3b 50%) 1;
  }
  &.scss {
    border-image: linear-gradient(to right, #cc6699 50%, #cc6699 50%) 1;
  }
  &.node-js {
    border-image: linear-gradient(to right, #68a063 50%, #3c873a 50%) 1;
  }
  &.express-js {
    border-image: linear-gradient(to right, black 50%, black 50%) 1;
  }
  &.mongodb {
    border-image: linear-gradient(to right, #4db33d 50%, #3fa037 50%) 1;
  }
}
</style>
