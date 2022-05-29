<template>
  <article>
    <PostInfo></PostInfo>
    <PostContentContainer></PostContentContainer>
    <PostPrevNext :prev="prev" :next="next"></PostPrevNext>
    <PostComment></PostComment>
  </article>
</template>

<script>
import { getPattern } from '@/utils/pattern'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const postArray = await $content('posts', { deep: true, text: true })
        .where({ slug: params.slug })
        .fetch()

      if (postArray.length === 0) {
        error({ statusCode: 404 })
      }
      const post = postArray[0]

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
  computed: {
    headerImage() {
      return this.post.image
        ? `url(/images/projects/${this.post.image})`
        : this.getPattern(this.post.title)
    },
  },
  created() {
    this.$store.commit('SET_POST', this.post)
    this.$store.commit('SET_HEADER_IMAGE', this.headerImage)
  },
  methods: {
    getPattern,
  },
  head() {
    return {
      title: `${this.post.title} | 포스트`,
    }
  },
}
</script>
