<template>
  <section class="content-container">
    <PostContent></PostContent>
    <PostTocMobile
      v-if="isTablet && post.toc.length > 1"
      :toc="post.toc"
    ></PostTocMobile>
    <PostTocDesktop v-if="!isTablet" :toc="post.toc"></PostTocDesktop>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['post', 'isTablet']),
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  padding: 64px 32px;
  gap: 48px;
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
    gap: 0;
  }
}
@include viewpoint-sm {
  .content-container {
    width: $breakpoint-sm;
    gap: 0;
  }
}
@include viewpoint-xs {
  .content-container {
    width: 100vw;
    gap: 0;
  }
}
</style>
