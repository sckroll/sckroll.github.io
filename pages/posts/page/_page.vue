<template>
  <div class="post-list-page">
    <post-list :posts="paginatedPosts" search-button>
      <template v-slot:title>블로그 포스트</template>
    </post-list>
    <post-pagination
      :total="totalPostCount"
      :per-page="perPage"
    ></post-pagination>
  </div>
</template>

<script>
// 한 페이지당 포스트 개수
const PER_PAGE = 10

export default {
  async asyncData({ $content, params, error }) {
    try {
      // 총 포스트 개수
      const allPosts = await $content('posts', { deep: true }).fetch()
      const totalPostCount = allPosts.length

      // 현재 & 마지막 페이지
      const currPage = parseInt(params.page)
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
      const paginatedPosts = await $content('posts', { deep: true })
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
      const sortedTags = [...tagCounter]
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0])

      return {
        totalPostCount,
        paginatedPosts,
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

<style lang="scss">
.post-list-page {
  margin: $header-height 0 64px;
}
</style>
