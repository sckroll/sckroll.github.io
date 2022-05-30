<template>
  <section class="content-container" :class="{ project }">
    <PostContent></PostContent>
    <PostTocMobile
      v-if="isMobile && post.toc.length > 1"
      :toc="post.toc"
    ></PostTocMobile>
    <PostTocDesktop v-if="!isMobile" :toc="post.toc"></PostTocDesktop>
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
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  padding: 64px 32px;
  gap: 32px;
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
