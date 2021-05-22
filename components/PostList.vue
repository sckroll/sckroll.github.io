<template>
  <section class="post-list">
    <div class="component-title">
      <h2 class="component-label"><slot></slot></h2>
      <app-search-input v-if="!landing" @posts="getSearchResult" />
    </div>
    <section class="post-grid">
      <div
        v-for="post in searchResults.length > 0 ? searchResults : posts"
        :key="post.slug"
      >
        <post-preview :post="post" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    landing: {
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
  padding: 0 30px;
}

.component-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 28px;
    font-weight: 700;
  }
}

.post-grid {
  display: grid;
  justify-content: space-between;
}

@include viewpoint-xl {
  .post-list {
    width: $breakpoint-xl;
  }
  .post-grid {
    grid-template-columns: repeat(4, $thumbnail-width-xl);
    row-gap: 10px;
  }
}
@include viewpoint-lg {
  .post-list {
    width: $breakpoint-lg;
  }
  .post-grid {
    grid-template-columns: repeat(3, $thumbnail-width-lg);
    row-gap: 13px;
  }
}
@include viewpoint-md {
  .post-list {
    width: $breakpoint-md;
  }
  .post-grid {
    grid-template-columns: repeat(3, $thumbnail-width-md);
    row-gap: 5px;
  }
}
@include viewpoint-sm {
  .component-title {
    display: block;
  }
  .component-label {
    margin-bottom: 15px;
  }
  .post-list {
    width: $breakpoint-sm;
  }
  .post-grid {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
}
</style>
