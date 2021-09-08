<template>
  <section class="post-list">
    <div class="component-title" :class="{ searchable }">
      <h2 class="component-label">
        <slot name="title"></slot>
      </h2>
      <post-search-input v-if="searchable" @posts="getSearchResult" />
    </div>
    <post-list-contents
      :posts="posts"
      :results="searchResults"
    ></post-list-contents>
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
  },
  data() {
    return {
      searchResults: [],
    }
  },
  methods: {
    getSearchResult(results) {
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
  margin-bottom: 32px;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
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
  .post-list {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .component-title {
    h2 {
      margin-bottom: 8px;
      font-size: 24px;
    }
    &.searchable {
      display: block;
    }
  }
  .component-label {
    margin-bottom: 16px;
  }
  .post-list {
    width: 100vw;
  }
}
</style>
