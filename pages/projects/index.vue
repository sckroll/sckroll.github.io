<template>
  <div class="page-container post-list-page">
    <PostList :projects="teamProjects">
      <template v-slot:title>팀 프로젝트</template>
    </PostList>
    <PostList :projects="personalProjects">
      <template v-slot:title>개인 프로젝트</template>
    </PostList>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const teamProjects = await $content('projects')
        .only([
          'title',
          'slug',
          'description',
          'image',
          'stacks',
          'period',
          'isTeamProject',
        ])
        .where({ isTeamProject: true })
        .sortBy('period', 'desc')
        .fetch()
      const personalProjects = await $content('projects')
        .only([
          'title',
          'slug',
          'description',
          'image',
          'stacks',
          'period',
          'isTeamProject',
        ])
        .where({ isTeamProject: false })
        .sortBy('period', 'desc')
        .fetch()

      return {
        teamProjects,
        personalProjects,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  head() {
    return {
      title: '프로젝트',
      meta: [
        {
          property: 'og:title',
          content: '프로젝트 - Sckroll',
        },
        {
          property: 'og:url',
          content: 'https://sckroll.github.io/projects',
        },
        {
          property: 'og:description',
          content: 'Sckroll의 프로젝트 목록 페이지입니다.',
        },
      ],
    }
  },
}
</script>
