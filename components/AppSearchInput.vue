<template>
  <span class="search-input">
    <fa-icon :icon="['fa', 'search']" class="search-icon" />
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="포스트 검색"
      class="search-input-box"
    />
    <button
      class="search-button"
      :class="field === 'title' ? 'toggled' : ''"
      @click="field = 'title'"
    >
      제목
    </button>
    <button
      class="search-button"
      :class="field === 'tags' ? 'toggled' : ''"
      @click="field = 'tags'"
    >
      태그
    </button>
    <button
      class="search-button"
      :class="field === 'text' ? 'toggled' : ''"
      @click="field = 'text'"
    >
      내용
    </button>
    <button class="search-button" @click="searchReset">초기화</button>
  </span>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      field: 'title',
    }
  },
  watch: {
    async searchQuery(query) {
      if (!query) return

      const results = await this.$content('posts', { deep: true })
        .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
        .sortBy('createdAt', 'desc')
        // .limit(8)
        .search(this.field, query)
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
    async searchReset() {
      this.searchQuery = ''

      const results = await this.$content('posts', { deep: true })
        .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
        .sortBy('createdAt', 'desc')
        // .limit(8)
        .fetch()
      this.$emit('posts', results)
    },
  },
}
</script>

<style lang="scss">
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
  width: 200px;
  font-size: 14px;
}

.search-input-box:hover {
  background-color: #dddddd;
}

.search-input-box:focus {
  outline: none;
  background-color: #dddddd;
}

.search-button {
  border: none;
  padding: 9px 10px;
  font-size: 14px;
  cursor: pointer;
}

.search-button.toggled {
  background-color: #cccccc;
}

@media screen and (max-width: 1200px) {
  .search-input-box {
    width: var(--post-preview-width-lg);
  }
}

@media screen and (max-width: 992px) {
  .search-input-box {
    width: var(--post-preview-width-md);
  }
}

@media screen and (max-width: 768px) {
  .search-input-box {
    width: var(--post-preview-width-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
