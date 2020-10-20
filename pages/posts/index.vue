<template>
  <div class="content-container">
    <header class="post-list-header">
      <div class="header-wrapper">
        <span class="logo">
          <nuxt-link :to="{ name: 'index' }">Sckroll</nuxt-link>
        </span>
        <nav class="nav-menu">
          <ul>
            <li>
              <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ name: 'posts' }">Posts</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
            </li>
            <li><fa-icon :icon="['far', 'moon']" /></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="content">
      <div class="post-content-wrapper">
        <h2 class="component-label">블로그 포스트</h2>
        <!-- <app-search-input /> -->
        <div class="post-list">
          <div v-for="post in posts" :key="post.slug" class="post-preview">
            <post-preview :post="post" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>

<style>
.post-content-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.post-list-header {
  display: flex;
  justify-content: center;
  padding: 60px 0 20px 0;
  font-family: 'NanumSquare', sans-serif;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
}

.post-list {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, var(--post-preview-width-xl));
  row-gap: 10px;
}

@media screen and (max-width: 1200px) {
  .post-content-wrapper {
    width: var(--container-lg);
  }
  .post-list {
    grid-template-columns: repeat(3, var(--post-preview-width-lg));
    row-gap: 13px;
  }
}

@media screen and (max-width: 992px) {
  .post-content-wrapper {
    width: var(--container-md);
  }
  .post-list {
    grid-template-columns: repeat(2, var(--post-preview-width-md));
    row-gap: 14px;
  }
}

@media screen and (max-width: 768px) {
  .post-content-wrapper {
    width: var(--container-sm);
  }
  .post-list {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
}

@media screen and (max-width: 576px) {
}
</style>
