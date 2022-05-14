<template>
  <section class="post-list">
    <div class="section-title-container" :class="{ searchable, searchButton }">
      <h1 class="section-title">
        <!-- TODO: 검색 결과 개수 -->
        <slot name="title"></slot>
      </h1>
      <!-- TODO: 검색창 -->
      <IconLink v-if="searchButton" to="/posts/search">
        <SvgBase icon>
          <IconSearch></IconSearch>
        </SvgBase>
      </IconLink>
    </div>
    <template v-if="searchButton">
      <!-- TODO: 검색 결과 & 검색 결과가 없는 경우 & 검색 결과 초기 메시지 -->
      <NewPostListContents :posts="posts"></NewPostListContents>
    </template>
    <NewPostListContents v-else :posts="posts"></NewPostListContents>
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
.search-message {
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: $color-grey-500;
}
</style>
