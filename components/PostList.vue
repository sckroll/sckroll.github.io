<template>
  <section class="content">
    <div class="post-list-container">
      <div class="component-title">
        <h2 class="component-label"><slot></slot></h2>
        <app-search-input v-if="!landing" @posts="getSearchResult" />
      </div>
      <section class="post-list">
        <div v-if="searchResults.length > 0" class="post-grid">
          <article
            v-for="post in searchResults"
            :key="post.slug"
            class="post-preview"
          >
            <post-preview :post="post" />
          </article>
        </div>
        <div v-else class="post-grid">
          <article v-for="post in posts" :key="post.slug" class="post-preview">
            <post-preview :post="post" />
          </article>
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

<style>
.post-list-container {
  width: var(--container-xl);
  padding: 0 30px;
}

.post-grid {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, var(--post-preview-width-xl));
  row-gap: 10px;
}

@media screen and (max-width: 1200px) {
  .post-list-container {
    width: var(--container-lg);
  }
  .post-list {
    grid-template-columns: repeat(3, var(--post-preview-width-lg));
    row-gap: 13px;
  }
}

@media screen and (max-width: 992px) {
  .post-list-container {
    width: var(--container-md);
  }
  .post-list {
    grid-template-columns: repeat(2, var(--post-preview-width-md));
    row-gap: 14px;
  }
}

@media screen and (max-width: 768px) {
  .post-list-container {
    width: var(--container-sm);
  }
  .post-list {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
}

@media screen and (max-width: 576px) {
}
</style>
