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
// 한 페이지당 포스트 개수
const PER_PAGE = 10

export default {
  async asyncData({ $content, query, error, redirect }) {
    try {
      // 쿼리스트링이 없거나 숫자 형식이 아니면 1페이지로 리다이렉트
      if (!query.page || isNaN(query.page)) redirect('/posts?page=1')

      // 총 포스트 개수
      const allPosts = await $content('posts', { deep: true })
        .only('tags')
        .fetch()
      const totalPostCount = allPosts.length

      // 페이지 수를 넘으면 1페이지로 리다이렉트
      if (query.page > totalPostCount) redirect('/posts?page=1')

      // 현재 & 마지막 페이지
      const currPage = parseInt(query.page)
      const lastPage = Math.ceil(totalPostCount / PER_PAGE)
      const lastPageCount = totalPostCount % PER_PAGE

      // 스킵할 포스트 개수
      const skipNumber = () => {
        if (currPage === 1) {
          return 0
        }
        if (currPage === lastPage) {
          return totalPostCount - lastPageCount
        }
        return (currPage - 1) * PER_PAGE
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
        .limit(PER_PAGE)
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
  data() {
    return {
      perPage: PER_PAGE,
    }
  },
  head() {
    return {
      title: '포스트',
    }
  },
}
</script>
