<template>
  <section class="content-container" :class="{ project }">
    <post-content :post="post" />
    <template v-if="isMobile && post.toc.length > 1">
      <div class="toc-mobile-button click-block" @click="toggleTocMenu">
        목차
      </div>
      <post-toc-mobile v-model="tocMenu" :toc="post.toc" />
    </template>
    <template v-else>
      <post-toc v-if="post.toc.length > 1" :toc="post.toc" />
    </template>
  </section>
</template>

<script>
import { breakpointLg } from '@/assets/scss/main.scss'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
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
@include set-viewpoint;

$background-height: 70vh;

.content-container {
  margin-top: $background-height;
  position: relative;
  display: flex;
  width: 100%;
  padding: 64px 32px;

  &.project {
    margin-top: 0;
    padding-top: 0;
  }
}
.toc-mobile-button {
  cursor: pointer;
  z-index: 1;
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 8px 16px;
  background-color: white;
  box-shadow: 0 1px 2px 1px rgba(black, 0.2);
  font-size: 1.25em;
  transition: $fade-default;

  &:hover {
    box-shadow: 0 2px 4px 2px rgba(black, 0.15);
    transition: $fade-default;
  }
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
