<template>
  <div class="page-container post-list-page">
    <PostList :posts="posts" :total="totalPostCount" searchable>
      <template v-slot:title>포스트 검색</template>
    </PostList>
    <PostPagination
      v-if="totalPostCount > 0"
      :total="totalPostCount"
    ></PostPagination>
  </div>
</template>

<script>
import { skipPost, getLastPage } from '@/utils/postUtils'

export default {
  async fetch() {
    try {
      // 검색 초기 페이지일 경우
      if (
        this.$route.path === '/posts/search' &&
        Object.keys(this.$route.query).length === 0
      )
        return { posts: [], totalPostCount: 0 }

      // 쿼리스트링에 모든 쿼리가 없으면 검색 초기 페이지로 리다이렉트
      if (!this.query || !this.page || isNaN(this.page) || !this.field) {
        this.$nuxt.context.redirect('/posts/search')
        return
      }

      // 한 페이지당 포스트 개수
      this.perPage = this.$store.state.perPage

      // 검색된 총 포스트 개수
      const allPosts = await this.$content('posts', { deep: true })
        .only([])
        .where({ [this.field]: { $contains: this.query } })
        .fetch()
      this.totalPostCount = allPosts.length

      // 페이지 범위 밖에 있으면 1페이지로 고정 & 리다이렉트
      const lastPage = getLastPage(this.totalPostCount)
      if (this.page < 1 || (lastPage > 0 && this.page > lastPage)) {
        this.$nuxt.context.redirect({
          path: '/posts/search',
          query: {
            q: this.query,
            field: this.field,
            page: 1,
          },
        })
        return
      }

      // search()를 사용하면 한 글자만 달라도 검색 결과에 포함되므로
      // (ex: tree를 검색했을 때 trie도 결과에 포함됨)
      // where() 안에 MongoDB 문법인 $contains를 사용하여
      // 검색어를 오타 없이 완전히 포함한 모든 결과를 쿼리
      this.posts = await this.$content('posts', {
        deep: true,
        text: true,
      })
        .only([
          'title',
          'description',
          'img',
          'slug',
          'tags',
          'createdAt',
          'updatedAt',
          'text',
        ])
        .where({ [this.field]: { $contains: this.query } })
        .sortBy('createdAt', 'desc')
        .limit(this.perPage)
        .skip(skipPost(this.page, this.totalPostCount))
        .fetch()
    } catch (e) {
      this.$nuxt.error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  data() {
    return {
      posts: [],
      totalPostCount: 0,
      perPage: 0,
    }
  },
  computed: {
    query() {
      return this.$route.query.q
    },
    field() {
      return this.$route.query.field
    },
    page() {
      return this.$route.query.page
    },
  },
  watch: {
    '$route.query': '$fetch',
    query: {
      immediate: true,
      handler() {
        this.$fetch()
      },
    },
    page() {
      window.scrollTo(0, 0)
    },
  },
  head() {
    return {
      title: '포스트 검색',
    }
  },
}
</script>
