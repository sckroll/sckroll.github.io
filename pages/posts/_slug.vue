<template>
  <div class="content-container">
    <header class="page-header">
      <header-menu />
    </header>
    <!-- <div class="post-main-img"> -->
    <img
      :src="post.img"
      :alt="post.alt"
      class="post-main-img"
      draggable="false"
      onContextMenu="return false"
    />
    <!-- </div> -->
    <main class="content">
      <article class="post-content">
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <p>업데이트 날짜: {{ formatDate(post.updatedAt) }}</p>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag"> {{ tag }} </span>
        </div>

        <nav>
          <ul>
            <li v-for="link of post.toc" :key="link.id">
              <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <nuxt-content :document="post" />

        <prev-next :prev="prev" :next="next" />
      </article>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content('posts', params.slug).fetch()

      const [prev, next] = await $content('posts')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { post, prev, next }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }
      return new Date(date).toLocaleDateString('kr', options)
    },
  },
}
</script>

<style>
.post-main-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.post-content {
  position: absolute;
  width: var(--container-xl);
  padding: 0 30px;
}

.nuxt-content h2 {
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h2 {
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}
</style>
