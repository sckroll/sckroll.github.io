<template>
  <span class="search-input">
    <fa-icon :icon="['fa', 'search']" class="search-icon" />
    <div class="input-area">
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="포스트 검색"
      />
    </div>
    <div class="search-menu-button" @click="toggleDropdown">
      <fa-icon :icon="['fa', 'ellipsis-v']" class="search-menu-icon" />
      <div class="search-menu-overlay click-block"></div>
    </div>
    <search-dropdown
      v-model="dropdown"
      :items="fields"
      :selected="currField"
      @selected-item="setCurrField"
    ></search-dropdown>
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
      dropdown: false,
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
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    setCurrField(item) {
      this.currField = item
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
  margin-right: 16px;
  font-size: 1.25em;
  color: $sckroll-grey-2;
}
.input-area {
  display: flex;
  width: 200px;

  input {
    border: none;
    border-bottom: 3px solid $sckroll-grey-5;
    padding: 8px 0;
    font-size: 0.9em;
    width: 100%;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $sckroll-grey-4;
      transition: $fade-default;
    }
    &:focus {
      outline: none;
      border-bottom: 3px solid $sckroll-grey-4;
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
      color: $sckroll-grey-2;
      transition: $fade-default;
    }
  }
  .search-menu-icon {
    font-size: 20px;
    color: $sckroll-grey-3;
    transition: $fade-default;
  }
  .search-menu-overlay {
    width: inherit;
    height: inherit;
    position: absolute;
  }
}

@include viewpoint-sm {
  .search-input {
    margin-top: 8px;
    width: 100%;
  }
}
@include viewpoint-xs {
  .search-input {
    margin-top: 8px;
    width: 100%;
  }
}
</style>
