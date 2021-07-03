<template>
  <div>
    <div class="landing-background"></div>
    <div class="landing-margin"></div>
    <post-list :posts="posts" landing>
      <template v-slot:title>최근 포스트</template>
    </post-list>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
$background-height: 70vh;

.landing-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $background-height;
  background-image: url('/images/sckroll-main-image.jpg');
  background-size: cover;
  background-position-y: 95%;
}
.landing-margin {
  width: 100%;
  height: calc(#{$background-height} - #{$header-menu-height});
}
</style>
