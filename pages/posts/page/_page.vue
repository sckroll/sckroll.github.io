<template>
  <div>
    <post-list :posts="paginatedPosts" searchable>
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
const PER_PAGE = 12

export default {
  async asyncData({ $content, params }) {
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
          'path',
        ])
        .sortBy('createdAt', 'desc')
        .limit(PER_PAGE)
        .skip(skipNumber())
        .fetch()

      return {
        totalPostCount,
        paginatedPosts,
      }
    } catch (e) {
      console.error(e)
    }
  },
  data() {
    return {
      perPage: PER_PAGE,
    }
  },
}
</script>
