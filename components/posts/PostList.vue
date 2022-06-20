<template>
  <section class="post-list">
    <div class="section-title-container" :class="{ searchable, searchButton }">
      <h1 class="section-title">
        <div v-if="searchable">
          <template v-if="query">
            {{ `${fieldKor} 검색 결과: "${query}" 총 ${posts.length}개` }}
          </template>
          <template v-else>포스트 검색</template>
        </div>
        <slot v-else name="title"></slot>
      </h1>

      <PostSearch
        v-if="searchable"
        :initial-query="query"
        :initial-field="field"
      ></PostSearch>

      <IconLink v-if="searchButton" internal to="/posts/search">
        <SvgBase icon>
          <IconSearch></IconSearch>
        </SvgBase>
      </IconLink>
    </div>

    <template v-if="searchable">
      <div v-if="!query" class="search-message">
        검색할 포스트를 입력하세요.
      </div>
      <template v-else>
        <template v-if="posts.length > 0">
          <PostListContents :posts="slicedPosts"></PostListContents>
          <div v-if="lastIndex < posts.length" class="more-button-container">
            <IconLink @click="showMoreResults">
              <SvgBase icon>
                <IconDown></IconDown>
              </SvgBase>
            </IconLink>
          </div>
        </template>
        <div v-else class="search-message">검색 결과가 없습니다.</div>
      </template>
    </template>
    <PostListContents
      v-else
      :posts="posts"
      :projects="projects"
    ></PostListContents>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: [Array, null],
      default: null,
    },
    projects: {
      type: [Array, null],
      default: null,
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
      fieldKor: '',
      slicedPosts: [],
      lastIndex: 0,
      offset: 10,
    }
  },
  computed: {
    query() {
      return this.$route.query.q || ''
    },
    field() {
      return this.$route.query.field || ''
    },
  },
  watch: {
    posts: {
      deep: true,
      handler() {
        this.lastIndex = 0
        this.showMoreResults()
      },
    },
  },
  mounted() {
    this.getFieldKor()
    if (this.posts) this.showMoreResults()
  },
  methods: {
    showMoreResults() {
      this.lastIndex += this.offset
      this.slicedPosts = this.posts.slice(0, this.lastIndex)
    },
    getFieldKor() {
      if (this.field === 'tags') this.fieldKor = '태그'
      else if (this.field === 'text') this.fieldKor = '내용'
      else this.fieldKor = '제목'
    },
  },
}
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.section-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
    transition: $fade-default;
  }
}
.search-message {
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: $color-grey-500;
}
.more-button-container {
  display: flex;
  justify-content: center;
}

@include viewpoint-md {
  .section-title-container.searchable {
    flex-direction: column;
    gap: 8px;
  }
  .section-title {
    display: flex;
    width: 100%;
  }
}
@include viewpoint-sm {
  .section-title-container.searchable {
    flex-direction: column;
    gap: 8px;
  }
  .section-title {
    display: flex;
    width: 100%;
  }
}
@include viewpoint-xs {
  .section-title-container.searchable {
    flex-direction: column;
    gap: 8px;
  }
  .section-title {
    display: flex;
    width: 100%;
  }
}
</style>
