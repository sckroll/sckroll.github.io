<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="포스트 검색"
    />
    <ul v-if="posts.length">
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">{{
          post.title
        }}</nuxt-link>
      </li>
    </ul>
    <no-ssr>
      <p>no-ssr 태그를 사용하여 클라이언트에서 렌더링 (deprecated)</p>
    </no-ssr>
    <client-only placeholder="클라이언트에 마운트되기 전에 뜨는 텍스트">
      <p>client-only 태그를 사용하여 클라이언트에서 렌더링</p>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      posts: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.posts = []
        return
      }
      this.posts = await this.$content('posts')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>
