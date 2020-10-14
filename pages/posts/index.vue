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
      <h2>블로그 포스트</h2>
      <app-search-input />
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <nuxt-link :to="{ name: 'posts/slug', params: { slug: post.slug } }">
            <img :src="post.img" />
            <div>
              <h2>{{ post.title }}</h2>
              <p>{{ post.description }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tags'])
      .sortBy('createdBy', 'asc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>

<style>
.post-list-header {
  width: 100%;
  padding: 60px 0 20px 0;
  font-family: 'NanumSquare', sans-serif;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
}
</style>
