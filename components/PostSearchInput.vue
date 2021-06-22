<template>
  <span class="search-input">
    <fa-icon :icon="['fa', 'search']" class="search-icon" />
    <span class="input-area">
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="포스트 검색"
      />
      <button class="btn-clear" @click="searchReset">
        <fa-icon :icon="['fa', 'times']" />
      </button>
    </span>
    <button
      v-for="field in fields"
      :key="field.name"
      class="btn-toggle"
      :class="{ toggled: currField === field.name }"
      @click="currField = field.name"
    >
      {{ field.label }}
    </button>
  </span>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      currField: 'title',
      fields: [
        {
          name: 'title',
          label: '제목',
        },
        {
          name: 'tags',
          label: '태그',
        },
        {
          name: 'text',
          label: '내용',
        },
      ],
    }
  },
  watch: {
    async searchQuery(query) {
      if (!query) return

      const results = await this.$content('posts', { deep: true })
        .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
        .sortBy('createdAt', 'desc')
        // .limit(8)
        .search(this.currField, query)
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
}
.input-area {
  display: flex;

  input {
    border: none;
    padding: 10px;
    background-color: #eeeeee;
    font-size: 14px;
    width: 100%;

    &:hover {
      background-color: #dddddd;
    }
    &:focus {
      outline: none;
      background-color: #dddddd;
    }

    /* 인풋 박스 X 버튼 삭제 */
    /* 출처: https://blog.maximerouiller.com/post/remove-the-x-from-internet-explorer-and-chrome-input-type-search/ */
    &[type='search']::-ms-clear,
    &[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    &[type='search']::-webkit-search-decoration,
    &[type='search']::-webkit-search-cancel-button,
    &[type='search']::-webkit-search-results-button,
    &[type='search']::-webkit-search-results-decoration {
      display: none;
    }
  }
  .btn-clear {
    border: none;
    cursor: pointer;
    width: 36px;
    font-size: 16px;
    background-color: #dddddd;
  }
}
.btn-toggle {
  border: none;
  padding: 9px 10px;
  font-size: 14px;
  cursor: pointer;

  &.toggled {
    background-color: #cccccc;
  }
}

@include viewpoint-sm {
  .search-input {
    margin-top: 10px;
  }
}
@include viewpoint-xs {
  .search-input {
    margin-top: 10px;
  }
}
</style>
