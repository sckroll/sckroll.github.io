<template>
  <section>
    <div v-for="post in results.length > 0 ? results : posts" :key="post.slug">
      <post-list-item :post="post" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  div {
    border-top: 1px solid #cccccc;

    &:first-child {
      border-top: 0;
    }
  }
}
</style>
