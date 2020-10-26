<template>
  <div class="index-container">
    <header class="landing-header">
      <header-menu landing />
    </header>
    <!-- <section class="content">
      <div class="index-content-wrapper">
        <h2 class="component-label">최근 포스트</h2>
        <div class="recent-posts-temp">최근 포스트 영역</div>
      </div>
    </section> -->
    <post-list :posts="posts">최근 포스트</post-list>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
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

<style>
.landing-header {
  display: flex;
  justify-content: center;
  background-image: url('/landingPageImg.jpg');
  background-size: cover;
  background-position-y: 95%;
  height: 700px;
  padding-top: 60px;
  font-family: 'NanumSquare', sans-serif;
}

.index-content-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.recent-posts-temp {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
  background-color: #cccccc;
}

@media screen and (max-width: 1200px) {
  .index-content-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .index-content-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .index-content-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
