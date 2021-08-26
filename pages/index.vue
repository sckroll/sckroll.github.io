<template>
  <div>
    <div class="landing-background">
      <div
        class="landing-background-img"
        :style="`background: ${getPattern('Sckroll')};`"
      >
        <div class="landing-background-overlay"></div>
      </div>
    </div>
    <div class="landing-content">
      <post-list :posts="posts">
        <template v-slot:title>최근 포스트</template>
      </post-list>
    </div>
  </div>
</template>

<script>
import { getPattern } from '@/utils/pattern'

export default {
  async asyncData({ $content }) {
    const posts = await $content('posts', { deep: true })
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(8)
      .fetch()

    return {
      posts,
    }
  },
  methods: {
    getPattern,
  },
}
</script>

<style lang="scss">
$background-height: 70vh;

.landing-background {
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $background-height;
  }
  &-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.3);
  }
}
.landing-content {
  margin-top: calc(#{$background-height} - #{$header-height-desktop});
}
</style>
