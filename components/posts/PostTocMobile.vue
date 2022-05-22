<template>
  <div class="toc-mobile-container">
    <div class="toc-mobile-button click-block" @click="toggleTocMenu">목차</div>
    <transition name="fade">
      <div v-if="tocMenu" class="post-mobile-toc click-block">
        <PostToc :toc="toc" mobile></PostToc>
      </div>
    </transition>
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
      tocMenu: false,
    }
  },
  watch: {
    tocMenu: {
      handler(val) {
        if (val) {
          window.addEventListener('click', this.clickListener)
        } else {
          window.removeEventListener('click', this.clickListener)
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickListener)
  },
  methods: {
    clickListener({ target }) {
      if (target.classList.contains('click-block')) return
      this.hideToc()
    },
    toggleTocMenu() {
      this.tocMenu = !this.tocMenu
    },
    hideToc() {
      this.tocMenu = false
    },
  },
}
</script>

<style lang="scss" scoped>
.toc-mobile-button {
  cursor: pointer;
  z-index: 1;
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 8px 16px;
  background-color: rgba(white, 0.7);
  backdrop-filter: blur(4px);
  box-shadow: $shadow-default;
  font-size: 1.25em;
  transition: $fade-default;

  &:hover {
    box-shadow: $shadow-hover;
    transition: $fade-default;
  }
}
.post-mobile-toc {
  z-index: 1;
  position: fixed;
  right: 32px;
  bottom: 96px;
  padding: 16px;
  background-color: rgba(white, 0.7);
  backdrop-filter: blur(4px);
  box-shadow: $shadow-default;
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
.dark-mode {
  .toc-mobile-button,
  .post-mobile-toc {
    background-color: rgba(black, 0.7);
    backdrop-filter: blur(4px);
  }
}
</style>
