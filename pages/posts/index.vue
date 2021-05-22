<template>
  <post-list :posts="posts">블로그 포스트</post-list>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts', { deep: true })
      .only([
        'title',
        'description',
        'img',
        'slug',
        'tags',
        'createdAt',
        'path',
      ])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>
