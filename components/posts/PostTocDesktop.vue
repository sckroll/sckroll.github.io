<template>
  <div class="toc-desktop-container">
    <div v-if="toc.length > 1" class="post-toc">
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
        <PostToc v-if="isExpanded" :toc="toc"></PostToc>
      </transition>
    </div>
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
.toc-desktop-container {
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
.dark-mode .toc-header:hover {
  color: $color-secondary;

  svg {
    fill: $color-secondary;
  }
}
</style>
