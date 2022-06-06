<template>
  <div class="page-container post-list-page">
    <PostList :posts="posts" searchable>
      <template v-slot:title>포스트 검색</template>
    </PostList>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, query }) {
    try {
      let posts = $content('posts', {
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
        // search()를 사용하면 한 글자만 달라도 검색 결과에 포함되므로
        // (ex: tree를 검색했을 때 trie도 결과에 포함됨)
        // where() 안에 MongoDB 문법인 $contains를 사용하여
        // 검색어를 오타 없이 완전히 포함한 모든 결과를 쿼리
        posts = posts.where({ [query.field]: { $contains: query.q } })
      }
      posts = await posts.sortBy('createdAt', 'desc').fetch()

      return {
        posts,
      }
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    query() {
      return this.$route.query.q || ''
    },
    field() {
      return this.$route.query.field || ''
    },
  },
  watch: {
    async query(val) {
      try {
        let posts = this.$content('posts', {
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

        if (val && this.field) {
          posts = posts.where({ [this.field]: { $contains: val } })
        }
        this.posts = await posts.sortBy('createdAt', 'desc').fetch()
      } catch (e) {
        console.error(e)
      }
    },
  },
  head() {
    return {
      title: '포스트 검색',
    }
  },
}
</script>
