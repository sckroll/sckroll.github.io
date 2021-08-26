<template>
  <section class="post-list">
    <div class="component-title">
      <h2 class="component-label">
        <slot name="title"></slot>
      </h2>
      <div v-if="!isMobileView || !landing" class="post-functions">
        <post-search-input v-if="!landing" @posts="getSearchResult" />
        <div v-if="!isMobileView" class="post-view-toggle">
          <span
            class="post-toggle-icon"
            :class="{ toggled: isGridView }"
            @click="toggleGridView"
          >
            <fa-icon :icon="['fa', 'th']" />
          </span>
          <span
            class="post-toggle-icon"
            :class="{ toggled: !isGridView }"
            @click="toggleListView"
          >
            <fa-icon :icon="['fa', 'list']" />
          </span>
        </div>
      </div>
    </div>
    <post-grid-contents
      v-if="isGridView"
      :posts="posts"
      :results="searchResults"
    />
    <post-list-contents v-else :posts="posts" :results="searchResults" />
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
      isGridView: true,
      isMobileView: false,
    }
  },
  mounted() {
    const isListView = localStorage.getItem('isPostListView')
    if (isListView) {
      this.isGridView = false
    }
  },
  methods: {
    getSearchResult(results) {
      this.searchResults = results
    },
    toggleGridView() {
      this.isGridView = true
      localStorage.removeItem('isPostListView')
    },
    toggleListView() {
      this.isGridView = false
      localStorage.setItem('isPostListView', true)
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.post-list {
  padding: 0 32px;
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
.post-functions {
  display: flex;
  justify-content: space-between;
}
.post-view-toggle {
  font-size: 1.5em;
  margin-left: 16px;

  .post-toggle-icon {
    cursor: pointer;
    color: $sckroll-grey-4;
    margin-left: 8px;
    transition: $fade-default;

    &:hover {
      color: $sckroll-grey-3;
      transition: $fade-default;
    }
    &.toggled {
      color: black;
      transition: $fade-default;
    }
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
    display: block;
  }
  .component-label {
    margin-bottom: 16px;
  }
  .post-list {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .component-title {
    display: block;

    h2 {
      font-size: 24px;
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
