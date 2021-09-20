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
      return this.stack.toLowerCase().split(' ')[0]
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  margin-right: 8px;
  padding: 4px 0;
  border-top: 3px solid transparent;
  border-bottom: 3px solid $sckroll-grey-4;

  &:last-child {
    margin-right: 0;
  }
  &.javascript {
    border-bottom: 3px solid #f0db4f;
  }
}
</style>
