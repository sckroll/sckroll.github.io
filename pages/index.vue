<template>
  <div class="page-container">
    <section class="header-area">
      <HeaderIntroMessage></HeaderIntroMessage>
    </section>
    <section class="content-area">
      <PostList :posts="posts">
        <template v-slot:title>최근 포스트</template>
      </PostList>
    </section>
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
        .limit(6)
        .fetch()

      return {
        posts,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  created() {
    this.$store.commit('CLEAR_HEADER_IMAGE')
  },
  head() {
    return {
      title: '홈',
    }
  },
}
</script>

<style lang="scss">
section.header-area {
  height: calc(70vh - $header-height);
  display: flex;
  align-items: center;
  color: white;
}
section.content-area {
  margin: 32px 0;
}
</style>
