<template>
  <div class="toc-container">
    <nav class="post-toc">
      <div class="toc-header" @click="toggleToc">
        <div>목차</div>
        <span v-if="isExpanded">
          <fa-icon :icon="['fa', 'chevron-up']" class="btn-icon" />
        </span>
        <span v-else>
          <fa-icon :icon="['fa', 'chevron-down']" class="btn-icon" />
        </span>
      </div>
      <div v-if="isExpanded" class="toc-body">
        <div v-for="link of toc" :key="link.id" class="toc-list">
          <div
            class="toc-item"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <nuxt-link :to="`#${link.id}`">
              <span class="toc-text">{{ link.text }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: true,
    }
  },
  mounted() {
    const isTocOpened = localStorage.getItem('sckrollTocState')
    if (isTocOpened && isTocOpened !== 'true') {
      this.isExpanded = false
    } else {
      localStorage.setItem('sckrollTocState', true)
    }
  },
  methods: {
    toggleToc() {
      this.isExpanded = !this.isExpanded
      localStorage.setItem('sckrollTocState', this.isExpanded)
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.toc-container {
  flex: 1;
}
.post-toc {
  position: sticky;
  top: calc(#{$header-height} + 32px);

  .toc-header {
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: $fade-default;

    &:hover {
      color: $color-primary;
      transition: $fade-default;
    }
    div {
      font-size: 1.25em;
      font-family: 'NanumSquare', sans-serif;
      font-weight: 600;
    }
    .btn-icon {
      font-size: 1.25em;
      margin-left: 8px;
    }
  }
  .toc-body {
    margin-top: 13px;
  }
}
.toc-list {
  .toc-item {
    width: 100%;
    margin: 8px 0;
  }
  .toc-text {
    padding: 2px 0;
    border-bottom: 2px solid transparent;
    transition: $fade-default;

    &:hover {
      border-bottom: 2px solid $color-primary;
      transition: $fade-default;
    }
    &:active {
      color: $color-primary;
      transition: $fade-default;
    }
  }
  .toc3 {
    font-size: 0.8em;
    margin-left: 16px;

    &::before {
      content: '-';
      margin-right: 4px;
    }
  }
}
</style>
