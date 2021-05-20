<template>
  <span class="search-input">
    <fa-icon :icon="['fa', 'search']" class="search-icon" />
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="포스트 검색"
      class="input-area"
    />
    <button
      class="btn-search"
      :class="{ toggled: field === 'title' }"
      @click="field = 'title'"
    >
      제목
    </button>
    <button
      class="btn-search"
      :class="{ toggled: field === 'tags' }"
      @click="field = 'tags'"
    >
      태그
    </button>
    <button
      class="btn-search"
      :class="{ toggled: field === 'text' }"
      @click="field = 'text'"
    >
      내용
    </button>
    <button class="btn-search btn-clear" @click="searchReset">초기화</button>
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

<style lang="scss" scoped>
@include set-viewpoint;

.search-input {
  display: flex;
  align-items: center;
}

.search-icon {
  margin-right: 10px;
  font-size: 20px;
  color: #333333;
  flex: 1;
}

.input-area {
  border: none;
  padding: 10px;
  background-color: #eeeeee;
  font-size: 14px;
  flex: 6;

  &:hover {
    background-color: #dddddd;
  }
  &:focus {
    outline: none;
    background-color: #dddddd;
  }
}

.btn-search {
  border: none;
  padding: 9px 10px;
  font-size: 14px;
  cursor: pointer;
  flex: 1;

  &.toggled {
    background-color: #cccccc;
  }
  &.btn-clear {
    flex: 2;
  }
}

@include viewpoint-xl {
  .search-input {
    width: $search-width-xl;
  }
}
@include viewpoint-lg {
  .search-input {
    width: $search-width-lg;
  }
}
@include viewpoint-md {
  .search-input {
    width: $search-width-md;
  }
}
@include viewpoint-sm {
  .search-input {
    width: $search-width-sm;
  }
}
</style>
