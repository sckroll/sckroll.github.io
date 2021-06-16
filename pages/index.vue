<template>
  <div>
    <div class="landing-background"></div>
    <h1 class="landing-title">
      {{ title1 }}<br />{{ title2 }}<br />{{ title3 }}
    </h1>
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
  data() {
    return {
      title1: '예비 개발자 Sckroll의',
      title2: '홈페이지에 오신 것을',
      title3: '환영합니다',
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

.landing-title {
  position: absolute;
  top: $header-menu-height;
  color: #ffffff;
  margin: 60px 0 0 30px;
  font-size: 32px;
  font-weight: 500;

  br {
    display: block;
    content: '';
    margin: 5px 0;
  }
}

.landing-margin {
  width: 100%;
  height: calc(#{$background-height} - #{$header-menu-height});
}
</style>
