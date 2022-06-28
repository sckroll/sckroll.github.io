<template>
  <article>
    <PostInfo></PostInfo>
    <PostContentContainer></PostContentContainer>
    <PostPrevNext :prev="prev" :next="next"></PostPrevNext>
    <PostComment></PostComment>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error, store }) {
    try {
      const postArray = await $content('posts', { deep: true, text: true })
        .where({ slug: params.slug })
        .fetch()

      if (postArray.length === 0) {
        error({ statusCode: 404 })
      }
      const post = postArray[0]

      // 스토어 업데이트
      store.commit('SET_POST', post)
      if (post.img) store.commit('SET_HEADER_IMAGE', post.img)

      const [prev, next] = await $content('posts', { deep: true })
        .only(['title', 'slug', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { post, prev, next }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  beforeDestroy() {
    this.$store.commit('CLEAR_POST')
  },
  head() {
    return {
      title: `${this.post.title} | 포스트`,
    }
  },
}
</script>
