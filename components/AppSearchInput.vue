<template>
  <span class="search-input">
    <fa-icon :icon="['fa', 'search']" class="search-icon" />
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="포스트 내용 검색"
      class="search-input-box"
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
  display: flex;
  align-items: center;
}

.search-icon {
  margin-right: 10px;
  font-size: 20px;
  color: #333333;
}

.search-input-box {
  border: none;
  padding: 10px;
  background-color: #eeeeee;
  width: 300px;
  font-size: 14px;
}

.search-input-box:hover {
  background-color: #dddddd;
}

.search-input-box:focus {
  outline: none;
  background-color: #dddddd;
}

/* .search-input-box::-webkit-search-decoration,
.search-input-box::-webkit-search-cancel-button,
.search-input-box::-webkit-search-results-button,
.search-input-box::-webkit-search-results-decoration {
  display: none;
} */
</style>
