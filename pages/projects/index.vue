<template>
  <div class="project-page">
    <project-list :projects="projects"></project-list>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const projects = await $content('projects')
        .only(['name', 'slug', 'description', 'image', 'stacks'])
        .fetch()
      return {
        projects,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
}
</script>

<style lang="scss">
.project-page {
  margin: $header-height 0 64px;
}
</style>
