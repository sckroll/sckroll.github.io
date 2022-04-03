<template>
  <section class="post-list-contents">
    <PostItem v-for="post in posts" :key="post.slug" :post="post"></PostItem>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
section.post-list-contents {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  a {
    border-bottom: none;
  }
}
</style>
