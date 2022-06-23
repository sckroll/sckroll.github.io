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
  async asyncData({ $content, query, error, redirect, store }) {
    try {
      // 검색 초기 페이지일 경우
      if (!query.page && !query.q && !query.field)
        return { posts: [], totalPostCount: 0 }

      // 쿼리스트링이 하나라도 없거나 올바른 형식이 아니면 초기 페이지로 리다이렉트
      if (!query.page || isNaN(query.page) || !query.q || !query.field)
        redirect('/posts/search')

      // 한 페이지당 포스트 개수
      const perPage = store.state.perPage

      // 검색된 총 포스트 개수
      const allPosts = await $content('posts', { deep: true })
        .only([])
        .where({ [query.field]: { $contains: query.q } })
        .fetch()
      const totalPostCount = allPosts.length

      // 페이지 범위 밖에 있으면 1페이지로 리다이렉트
      if (query.page < 1 || query.page > getLastPage(totalPostCount))
        redirect(`/posts/search?q=${query.q}&field=${query.field}&page=1`)

      // search()를 사용하면 한 글자만 달라도 검색 결과에 포함되므로
      // (ex: tree를 검색했을 때 trie도 결과에 포함됨)
      // where() 안에 MongoDB 문법인 $contains를 사용하여
      // 검색어를 오타 없이 완전히 포함한 모든 결과를 쿼리
      const posts = await $content('posts', {
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
        .where({ [query.field]: { $contains: query.q } })
        .sortBy('createdAt', 'desc')
        .limit(perPage)
        .skip(skipPost(query.page, totalPostCount))
        .fetch()

      return {
        posts,
        totalPostCount,
        perPage,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  computed: {
    query() {
      return this.$route.query.q || ''
    },
    field() {
      return this.$route.query.field || ''
    },
    page() {
      return this.$route.query.page || ''
    },
  },
  watch: {
    async query(val) {
      try {
        // 검색 초기 페이지로 돌아갈 경우
        if (!val) {
          this.posts = null
          this.totalPostCount = 0
          return
        }

        // perPage 값이 없을 경우 초기화
        if (!this.perPage) this.perPage = this.$store.state.perPage

        // 검색된 총 포스트 개수
        const allPosts = await this.$content('posts', { deep: true })
          .only([])
          .where({ [this.field]: { $contains: val } })
          .fetch()
        this.totalPostCount = allPosts.length

        // 현재 페이지의 포스트를 배열에 저장
        await this.updatePosts()
      } catch (e) {
        console.error(e)
      }
    },
    async page() {
      try {
        // 현재 페이지의 포스트를 배열에 저장
        await this.updatePosts()

        window.scrollTo(0, 0)
      } catch (e) {
        this.$nuxt.error({ statusCode: e.statusCode || e.status || 500 })
      }
    },
  },
  methods: {
    async updatePosts() {
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
    },
  },
  head() {
    return {
      title: '포스트 검색',
    }
  },
}
</script>
