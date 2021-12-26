<template>
  <div class="post-list-contents">
    <template v-if="featured">
      <post-list-item featured :post="featuredPost" />
      <post-list-item
        v-for="post in otherPosts"
        :key="post.slug"
        :post="post"
      />
    </template>
    <template v-else>
      <post-list-item v-for="post in posts" :key="post.slug" :post="post" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    featuredPost() {
      return this.posts[0]
    },
    otherPosts() {
      return this.posts.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.post-list-contents {
  display: flex;
  flex-direction: column;

  * {
    border-bottom: 1px solid var(--color-divider);

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
