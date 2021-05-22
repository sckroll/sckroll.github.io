<template>
  <section class="content">
    <div class="post-list-container">
      <div class="component-title">
        <h2 class="component-label"><slot></slot></h2>
        <app-search-input v-if="!landing" @posts="getSearchResult" />
      </div>
      <section v-if="searchResults.length > 0" class="post-grid">
        <div v-for="post in searchResults" :key="post.slug">
          <post-preview :post="post" />
        </div>
      </section>
      <section v-else class="post-grid">
        <div v-for="post in posts" :key="post.slug">
          <post-preview :post="post" />
        </div>
      </section>
    </div>
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

<style lang="scss">
@include set-viewpoint;

.post-list-container {
  padding: 0 30px;
}

.component-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.post-grid {
  display: grid;
  justify-content: space-between;
}

@include viewpoint-xl {
  .post-list-container {
    width: $breakpoint-xl;
  }
  .post-grid {
    grid-template-columns: repeat(4, $thumbnail-width-xl);
    row-gap: 10px;
  }
}
@include viewpoint-lg {
  .post-list-container {
    width: $breakpoint-lg;
  }
  .post-grid {
    grid-template-columns: repeat(3, $thumbnail-width-lg);
    row-gap: 13px;
  }
}
@include viewpoint-md {
  .post-list-container {
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
  .post-list-container {
    width: $breakpoint-sm;
  }
  .post-grid {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
}
</style>
