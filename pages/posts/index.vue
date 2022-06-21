<template>
  <div class="page-container post-list-page">
    <TagListSlider :tags="sortedTags"></TagListSlider>
    <PostList :posts="posts" search-button>
      <template v-slot:title>블로그 포스트</template>
    </PostList>
    <PostPagination :total="totalPostCount"></PostPagination>
  </div>
</template>

<script>
import { skipPost, getLastPage } from '@/utils/postUtils'

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

      // 페이지 범위 밖에 있으면 1페이지로 리다이렉트
      if (query.page < 1 || query.page > getLastPage(totalPostCount))
        redirect('/posts?page=1')

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
        .skip(skipPost(query.page, totalPostCount))
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
        perPage,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  computed: {
    page() {
      return this.$route.query.page || 1
    },
  },
  watch: {
    async page(val) {
      try {
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
          .skip(skipPost(val, this.totalPostCount))
          .fetch()

        window.scrollTo(0, 0)
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
