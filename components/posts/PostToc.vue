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
      <transition name="fade">
        <div v-if="isExpanded" class="toc-body">
          <div v-for="link of toc" :key="link.id" class="toc-list">
            <div
              class="toc-item"
              :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
            >
              <TextLink :to="`#${link.id}`">
                {{ link.text }}
              </TextLink>
            </div>
          </div>
        </div>
      </transition>
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
  flex: 1;
}
.post-toc {
  position: sticky;
  top: calc(#{$header-height} + 32px);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
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
.toc-item {
  display: flex;
  align-items: center;
  font-weight: 500;
}
.toc3 {
  font-size: 0.8em;
  margin-left: 16px;

  &::before {
    content: '-';
    margin-right: 4px;
    margin-bottom: 3px;
  }
}
.dark-mode .toc-header:hover {
  color: $color-secondary;

  svg {
    fill: $color-secondary;
  }
}
</style>
