<template>
  <div class="page-container post-list-page">
    <TagListSlider :tags="sortedTags"></TagListSlider>
    <PostList :posts="posts" search-button>
      <template v-slot:title>블로그 포스트</template>
    </PostList>
    <PostPagination
      :total="totalPostCount"
      :per-page="perPage"
    ></PostPagination>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, query, error, redirect, store }) {
    try {
      // 쿼리스트링이 없거나 숫자 형식이 아니면 1페이지로 리다이렉트
      if (!query.page || isNaN(query.page)) redirect('/posts?page=1')

      // 한 페이지당 포스트 개수
      const perPage = store.state.perPage

      // 총 포스트 개수
      const allPosts = await $content('posts', { deep: true })
        .only('tags')
        .fetch()
      const totalPostCount = allPosts.length

      // 현재 & 마지막 페이지
      const currPage = parseInt(query.page)
      const lastPage = Math.ceil(totalPostCount / perPage)
      const lastPageCount = totalPostCount % perPage

      // 페이지 범위 밖에 있으면 1페이지로 리다이렉트
      if (query.page < 1 || query.page > lastPage) redirect('/posts?page=1')

      // 스킵할 포스트 개수
      const skipNumber = () => {
        if (currPage === 1) {
          return 0
        }
        if (currPage === lastPage) {
          return totalPostCount - lastPageCount
        }
        return (currPage - 1) * perPage
      }

      // 현재 페이지의 포스트를 배열에 저장
      const posts = await $content('posts', { deep: true })
        .only([
          'title',
          'description',
          'img',
          'slug',
          'tags',
          'createdAt',
          'updatedAt',
        ])
        .sortBy('createdAt', 'desc')
        .limit(perPage)
        .skip(skipNumber())
        .fetch()

      // 모든 포스트의 태그를 추출, 빈도 순으로 정렬
      const tagCounter = new Map()
      allPosts
        .map(post => post.tags)
        .forEach(tags => {
          tags.split(', ').forEach(tag => {
            if (tagCounter.has(tag)) {
              tagCounter.set(tag, tagCounter.get(tag) + 1)
            } else {
              tagCounter.set(tag, 1)
            }
          })
        })
      const sortedTags = [...tagCounter].sort((a, b) => b[1] - a[1])

      return {
        totalPostCount,
        posts,
        sortedTags,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  computed: {
    page() {
      return this.$route.query.page || 1
    },
    perPage() {
      return this.$store.state.perPage
    },
  },
  watch: {
    async page(val) {
      try {
        // 총 포스트 개수
        const allPosts = await this.$content('posts', { deep: true })
          .only('tags')
          .fetch()
        const totalPostCount = allPosts.length

        // 현재 & 마지막 페이지
        const currPage = parseInt(val)
        const lastPage = Math.ceil(totalPostCount / this.perPage)
        const lastPageCount = totalPostCount % this.perPage

        // 스킵할 포스트 개수
        const skipNumber = () => {
          if (currPage === 1) {
            return 0
          }
          if (currPage === lastPage) {
            return totalPostCount - lastPageCount
          }
          return (currPage - 1) * this.perPage
        }

        // 현재 페이지의 포스트를 배열에 저장
        this.posts = await this.$content('posts', { deep: true })
          .only([
            'title',
            'description',
            'img',
            'slug',
            'tags',
            'createdAt',
            'updatedAt',
          ])
          .sortBy('createdAt', 'desc')
          .limit(this.perPage)
          .skip(skipNumber())
          .fetch()
      } catch (e) {
        this.$nuxt.error({ statusCode: e.statusCode || e.status || 500 })
      }
    },
  },
  head() {
    return {
      title: '포스트',
    }
  },
}
</script>
