<template>
  <span class="search-input">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="포스트 내용 검색"
    />
  </span>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  watch: {
    async searchQuery(query) {
      const results = await this.$content('posts', { deep: true })
        .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
        .sortBy('createdAt', 'desc')
        .limit(8)
        .search(query)
        .fetch()
      this.$emit('posts', results)
    },
  },
  methods: {
    getPostDate(post) {
      const ms = Date.parse(post.createdAt)
      const dateObj = new Date(ms)

      const year = dateObj.getFullYear()
      const month = this.addZero(dateObj.getMonth() + 1)
      const day = this.addZero(dateObj.getDate())

      return { year, month, day }
    },
    addZero(num) {
      const result = (num < 10 ? '0' : '') + num.toString(10)
      return result
    },
  },
}
</script>

<style>
.search-input {
}
</style>
