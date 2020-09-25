<template>
  <div>
    <h1>블로그 포스트</h1>
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
