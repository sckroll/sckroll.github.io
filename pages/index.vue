<template>
  <div class="landing-container">
    <post-list featured :posts="posts">
      <template v-slot:title>최근 포스트</template>
    </post-list>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const posts = await $content('posts', { deep: true })
        .only([
          'title',
          'description',
          'img',
          'slug',
          'tags',
          'createdAt',
          'updatedAt',
        ])
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()

      return {
        posts,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
}
</script>

<style lang="scss">
.landing-container {
  margin-top: $header-height;
}
</style>
