<template>
  <div class="post-search-container">
    <post-list :posts="posts" searchable>
      <template v-slot:title>포스트 검색</template>
    </post-list>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    try {
      const posts = await $content('posts', { deep: true })
        .only([
          'title',
          'description',
          'img',
          'slug',
          'tags',
          'createdAt',
          'plainText',
        ])
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        posts,
      }
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

<style lang="scss">
.post-search-container {
  margin: $header-height 0 64px;
}
</style>
