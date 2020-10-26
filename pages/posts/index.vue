<template>
  <div class="content-container">
    <header class="page-header">
      <header-menu />
    </header>
    <post-list :posts="posts" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>

<style>
.page-header {
  display: flex;
  justify-content: center;
  padding: 60px 0 20px 0;
  font-family: 'NanumSquare', sans-serif;
}
</style>
