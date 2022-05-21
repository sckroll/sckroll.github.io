<template>
  <section class="content-container" :class="{ project }">
    <PostContent></PostContent>
    <template v-if="isMobile && post.toc.length > 1">
      <div class="toc-mobile-button click-block" @click="toggleTocMenu">
        목차
      </div>
      <PostTocMobile v-model="tocMenu" :toc="post.toc"></PostTocMobile>
    </template>
    <PostToc v-else-if="post.toc.length > 1" :toc="post.toc"></PostToc>
  </section>
</template>

<script>
import { breakpointLg } from '@/assets/scss/main.scss'

export default {
  props: {
    project: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMobile: false,
      tocMenu: false,
    }
  },
  computed: {
    post() {
      return this.$store.state.post
    },
  },
  mounted() {
    this.resizeListener()
    window.addEventListener('resize', this.resizeListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeListener)
  },
  methods: {
    resizeListener() {
      this.isMobile =
        window.innerWidth <= parseInt(breakpointLg.replace('px', ''))
    },
    toggleTocMenu() {
      this.tocMenu = !this.tocMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  padding: 64px 32px;
  gap: 32px;
}
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
.dark-mode .toc-mobile-button {
  background-color: rgba(black, 0.7);
  backdrop-filter: blur(4px);
}

@include viewpoint-xl {
  .content-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .content-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .content-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .content-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .content-container {
    width: 100vw;
  }
}
</style>
