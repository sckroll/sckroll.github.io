<template>
  <section class="post-list">
    <div class="component-title" :class="{ searchable, searchButton }">
      <h1 class="component-label">
        <div v-if="isEmpty || allSearchResults.length > 0">
          {{ `${field} 검색 결과: "${query}" 총 ${allSearchResults.length}개` }}
        </div>
        <slot v-else name="title"></slot>
      </h1>
      <post-search-input
        v-if="searchable"
        :posts="posts"
        @posts="getSearchResult"
      />
      <nuxt-link v-if="searchButton" to="/posts/search" class="search-button">
        <fa-icon :icon="['fa', 'search']" class="search-icon" />
      </nuxt-link>
    </div>
    <template v-if="searchable">
      <template v-if="allSearchResults.length > 0">
        <post-list-contents :posts="searchResults"></post-list-contents>
        <div
          v-if="lastIndex < allSearchResults.length"
          class="more-button-container"
        >
          <div class="more-button" @click="showMoreResults">더 보기</div>
        </div>
      </template>
      <div v-else-if="isEmpty" class="search-message">
        검색 결과가 없습니다.
      </div>
      <div v-else class="search-message">검색할 포스트를 입력하세요.</div>
    </template>
    <template v-else>
      <post-list-contents
        :posts="posts"
        :featured="featured"
        :project="project"
      ></post-list-contents>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    searchButton: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      query: '',
      field: '',
      isEmpty: false,
      allSearchResults: [],
      searchResults: [],
      lastIndex: 10,
    }
  },
  methods: {
    getSearchResult({ query, field, isEmpty, results }) {
      this.query = query
      this.field = field
      this.isEmpty = isEmpty
      this.allSearchResults = results
      this.searchResults = results.slice(0, this.lastIndex)
    },
    showMoreResults() {
      this.lastIndex += 10
      this.searchResults = this.allSearchResults.slice(0, this.lastIndex)
    },
  },
}
</script>

<style lang="scss" scoped>
.post-list {
  padding: 64px 32px;
}
.component-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  h1 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
    transition: $fade-default;
  }
}
.search-button {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: $color-grey-3;
  transition: $fade-default;

  &:hover {
    color: $color-primary;
    transition: $fade-default;
  }
}
.dark-mode .search-button {
  color: $color-grey-6;
}
.search-message {
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: $color-grey-4;
}
.more-button-container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.more-button {
  cursor: pointer;
  font-family: 'NanumSquare', sans-serif;
  font-size: 1.25em;
  font-weight: 700;
  padding: 4px 0;
  border-bottom: 3px solid transparent;
  transition: $fade-default;

  &:hover {
    border-bottom: 3px solid $color-primary;
    transition: $fade-default;
  }
}

@include viewpoint-xl {
  .post-list {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .post-list {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .post-list {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .component-title {
    h1 {
      margin-bottom: 8px;
    }
    &.searchable,
    &.search-button {
      display: block;
      margin-bottom: 64px;
    }
  }
  .post-list {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .component-title {
    h1 {
      margin-bottom: 8px;
    }
    &.searchable,
    &.search-button {
      display: block;
      margin-bottom: 64px;
    }
  }
  .post-list {
    width: 100vw;
  }
}
</style>
