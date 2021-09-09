<template>
  <section class="post-list">
    <div class="component-title" :class="{ searchable, searchButton }">
      <h2 class="component-label">
        <div v-if="isEmpty || searchResults.length > 0">
          {{ `${field} 검색 결과: ${query}` }}
        </div>
        <slot v-else name="title"></slot>
      </h2>
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
      <post-list-contents
        v-if="searchResults.length > 0"
        :posts="searchResults"
      ></post-list-contents>
      <div v-else-if="isEmpty" class="search-message">
        검색 결과가 없습니다.
      </div>
      <div v-else class="search-message">검색할 포스트를 입력하세요.</div>
    </template>
    <post-list-contents v-else :posts="posts"></post-list-contents>
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
  },
  data() {
    return {
      query: '',
      field: '',
      isEmpty: false,
      searchResults: [],
    }
  },
  methods: {
    getSearchResult({ query, field, isEmpty, results }) {
      this.query = query
      this.field = field
      this.isEmpty = isEmpty
      this.searchResults = results
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.post-list {
  padding: 64px 32px;
}
.component-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  margin-bottom: 32px;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
  }
}
.search-button {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: $sckroll-grey-2;
  transition: $fade-default;

  &:hover {
    color: $sckroll-primary;
    transition: $fade-default;
  }
}
.search-message {
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: $sckroll-grey-3;
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
    h2 {
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
    h2 {
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
