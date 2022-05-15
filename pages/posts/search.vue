<template>
  <div class="page-container post-search-container">
    <!-- <post-list :posts="posts" searchable>
      <template v-slot:title>포스트 검색</template>
    </post-list> -->
    <NewPostList :posts="posts" searchable>
      <template v-slot:title>포스트 검색</template>
    </NewPostList>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, query }) {
    try {
      let posts = await $content('posts', {
        deep: true,
        text: true,
      }).only([
        'title',
        'description',
        'img',
        'slug',
        'tags',
        'createdAt',
        'updatedAt',
        'text',
      ])

      if (query.q && query.field) {
        posts = await posts.search(query.field, query.q)
      }
      posts = await posts.sortBy('createdAt', 'desc').fetch()

      return {
        posts,
      }
    } catch (e) {
      console.error(e)
    }
  },
  head() {
    return {
      title: '포스트 검색',
    }
  },
}
</script>

<style lang="scss">
.post-search-container {
  margin: $header-height 0 64px;
}
</style>
