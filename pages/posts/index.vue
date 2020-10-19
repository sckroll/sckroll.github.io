<template>
  <div class="content-container">
    <header class="post-list-header">
      <div class="header-wrapper">
        <span class="logo">Sckroll</span>
        <nav class="nav-menu">
          <ul>
            <li><a>About</a></li>
            <li><a>Posts</a></li>
            <li><a>Projects</a></li>
            <li><fa-icon :icon="['far', 'moon']" /></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="content">
      <div class="post-content-wrapper">
        <h2>블로그 포스트</h2>
        <app-search-input />
        <div class="post-list">
          <div v-for="post in posts" :key="post.slug" class="post-preview">
            <nuxt-link
              :to="{ name: 'posts/slug', params: { slug: post.slug } }"
              class="post-link"
            >
              <post-preview :post="post" />
            </nuxt-link>
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
  width: 1200px;
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
  grid-template-columns: repeat(4, var(--post-preview-width));
  row-gap: 10px;
}

/* .post-preview {
  height: 300px;
} */

.post-link {
  display: inline-block;
  height: 0;
}
</style>
