<template>
  <section class="post-list">
    <div class="component-title">
      <h2 class="component-label">
        <slot name="title"></slot>
      </h2>
      <div v-if="!isMobileView || !landing" class="post-functions">
        <post-search-input v-if="!landing" @posts="getSearchResult" />
        <div v-if="!isMobileView" class="post-view-toggle">
          <span class="post-toggle-icon" @click="isGridView = true">
            <fa-icon :icon="['fa', 'th']" />
          </span>
          <span class="post-toggle-icon" @click="isGridView = false">
            <fa-icon :icon="['fa', 'list']" />
          </span>
        </div>
      </div>
    </div>
    <section v-if="isGridView" class="post-grid-content">
      <div
        v-for="post in searchResults.length > 0 ? searchResults : posts"
        :key="post.slug"
      >
        <post-grid-preview :post="post" />
      </div>
    </section>
    <section v-else class="post-list-content">
      <div
        v-for="post in searchResults.length > 0 ? searchResults : posts"
        :key="post.slug"
      >
        <post-list-preview :post="post" />
      </div>
    </section>
  </section>
</template>

<script>
import breakpoints from '../assets/scss/main.scss'

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
      isGridView: true,
      isMobileView: false,
    }
  },
  mounted() {
    this.resizeListener()
    window.addEventListener('resize', this.resizeListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeListener)
  },
  methods: {
    getSearchResult(results) {
      this.searchResults = results
    },
    resizeListener() {
      const width = window.innerWidth
      const threshold = parseInt(breakpoints.breakpointMd.replace('px', ''))
      this.isMobileView = width < threshold
      this.isGridView = !this.isMobileView
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
.post-functions {
  display: flex;
  justify-content: space-between;
}
.post-view-toggle {
  font-size: 24px;
  margin-left: 20px;

  .post-toggle-icon {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #bbbbbb;
      transition: all 0.2s ease;
    }
  }
}
.post-grid-content {
  display: grid;
  justify-content: space-between;
}

@include viewpoint-xl {
  .post-list {
    width: $breakpoint-xl;
  }
  .post-grid-content {
    grid-template-columns: repeat(4, $thumbnail-width-xl);
    row-gap: 10px;
  }
}
@include viewpoint-lg {
  .post-list {
    width: $breakpoint-lg;
  }
  .post-grid-content {
    grid-template-columns: repeat(3, $thumbnail-width-lg);
    row-gap: 13px;
  }
}
@include viewpoint-md {
  .post-list {
    width: $breakpoint-md;
  }
  .post-grid-content {
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
  .post-grid-content {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
}
</style>
