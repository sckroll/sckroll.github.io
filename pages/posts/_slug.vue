<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <p>업데이트 날짜: {{ formatDate(post.updatedAt) }}</p>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag"> {{ tag }} </span>
    </div>

    <div>
      <img :src="post.img" :alt="post.alt" />
    </div>

    <Logo />

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
