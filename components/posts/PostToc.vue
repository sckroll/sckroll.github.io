<template>
  <div class="toc-container">
    <nav class="post-toc">
      <div class="toc-header" @click="toggleToc">
        <div class="toc-header-text">목차</div>
        <SvgBase v-if="isExpanded" icon width="24" height="24">
          <IconUp></IconUp>
        </SvgBase>
        <SvgBase v-else icon width="24" height="24">
          <IconDown></IconDown>
        </SvgBase>
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
    const isTocOpened = localStorage.getItem('sckroll-toc-state')
    if (isTocOpened && isTocOpened !== 'true') {
      this.isExpanded = false
    } else {
      localStorage.setItem('sckroll-toc-state', true)
    }
  },
  methods: {
    toggleToc() {
      this.isExpanded = !this.isExpanded
      localStorage.setItem('sckroll-toc-state', this.isExpanded)
    },
  },
}
</script>

<style lang="scss" scoped>
.toc-container {
  width: 20%;
}
.post-toc {
  position: sticky;
  top: calc(#{$header-height} + 32px);

  .toc-header {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: $fade-default;

    &:hover {
      color: $color-primary;

      svg {
        fill: $color-primary;
      }
    }
    .toc-header-text {
      font-size: 1.25em;
      font-weight: 600;
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
