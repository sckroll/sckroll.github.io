<template>
  <span class="search-input">
    <fa-icon :icon="['fa', 'search']" class="search-icon" />
    <div class="input-area">
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        :placeholder="`검색할 포스트의 ${currField} 입력 후 엔터`"
        @keydown="startSearch"
      />
    </div>
    <div class="search-menu-button" @click="toggleDropdown">
      <fa-icon :icon="['fa', 'ellipsis-v']" class="search-menu-icon" />
      <div class="search-menu-overlay click-block"></div>
    </div>
    <post-search-dropdown
      v-model="dropdown"
      :items="fields"
      :selected="currField"
      @selected-item="setCurrField"
    ></post-search-dropdown>
    <div class="search-clear-button" @click="clear">
      <fa-icon :icon="['fa', 'undo-alt']" class="clear-icon" />
    </div>
  </span>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '',
      currField: '제목',
      fields: ['제목', '태그', '내용'],
      dropdown: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    setCurrField(item) {
      this.currField = item
      this.clear()
    },
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
    startSearch({ key }) {
      if (key !== 'Enter') return
      if (!this.searchQuery) {
        const payload = {
          query: '',
          field: this.currField,
          isEmpty: false,
          results: [],
        }
        this.$emit('posts', payload)
        return
      }

      let results
      const query = this.searchQuery.toLowerCase()

      if (this.currField === '제목') {
        results = this.posts.filter(post => {
          return post.title.toLowerCase().includes(query)
        })
      } else if (this.currField === '태그') {
        results = this.posts.filter(post => {
          const tags = post.tags.split(', ')
          return tags.includes(query)
        })
      } else if (this.currField === '내용') {
        results = this.posts.filter(post => {
          return post.text.toLowerCase().includes(query)
        })
      }

      const payload = {
        query,
        field: this.currField,
        isEmpty: results.length === 0,
        results,
      }
      this.$emit('posts', payload)
    },
    clear() {
      this.searchQuery = ''
      const payload = {
        query: '',
        field: this.currField,
        isEmpty: false,
        results: [],
      }
      this.$emit('posts', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
}
.search-icon {
  margin-right: 16px;
  font-size: 1.25em;
  color: var(--color-search);
  transition: $fade-default;
}
.input-area {
  display: flex;

  input {
    width: 256px;
    border: none;
    border-bottom: 3px solid var(--color-search);
    background-color: transparent;
    padding: 8px 0;
    font-size: 0.9em;
    color: var(--color-text);
    caret-color: var(--color-text);
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
    &:focus {
      outline: none;
      border-bottom: 3px solid $color-primary;
    }
  }
}
.search-menu-button {
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    .search-menu-icon {
      color: $color-primary;
      transition: $fade-default;
    }
  }
  .search-menu-icon {
    font-size: 1.25em;
    color: var(--color-search);
    transition: $fade-default;
  }
  .search-menu-overlay {
    width: inherit;
    height: inherit;
    position: absolute;
  }
}
.search-clear-button {
  cursor: pointer;
  width: 16px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-search);
  transition: $fade-default;

  &:hover {
    color: $color-primary;
    transition: $fade-default;
  }
}

@include viewpoint-sm {
  .search-input {
    justify-content: flex-end;
  }
}
@include viewpoint-xs {
  .search-input {
    .input-area {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }
}
</style>
