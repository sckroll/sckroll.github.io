<template>
  <post-list :posts="posts">
    <template v-slot:title>블로그 포스트</template>
  </post-list>
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
