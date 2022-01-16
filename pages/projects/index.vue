<template>
  <div class="project-page">
    <post-list :posts="projects" project>
      <template v-slot:title>프로젝트 목록</template>
    </post-list>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const projects = await $content('projects')
        .only(['title', 'slug', 'description', 'image', 'stacks', 'period'])
        .sortBy('period', 'desc')
        .fetch()
      return {
        projects,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  head() {
    return {
      title: '프로젝트',
    }
  },
}
</script>

<style lang="scss">
.project-page {
  margin: $header-height 0 64px;
}
</style>
