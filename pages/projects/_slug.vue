<template>
  <article>
    <PostInfo></PostInfo>
    <PostContentContainer></PostContentContainer>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const project = await $content('projects')
        .where({ slug: params.slug })
        .fetch()

      if (project.length === 0) {
        error({ statusCode: 404 })
      }
      return {
        post: project[0],
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  computed: {
    headerImage() {
      return `url(/images/projects/${this.post.image})`
    },
  },
  created() {
    this.$store.commit('SET_POST', this.post)
    this.$store.commit('SET_HEADER_IMAGE', this.headerImage)
  },
  head() {
    return {
      title: `${this.post.title} | 프로젝트`,
    }
  },
}
</script>
