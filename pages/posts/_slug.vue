<template>
  <div class="content-container">
    <header class="page-header">
      <header-menu />
    </header>
    <section class="post-article">
      <article class="post-article-wrapper">
        <div class="post-img-wrapper">
          <div
            class="post-img"
            :style="`background: ${getPattern(post.title)};`"
          ></div>
          <div class="post-img-overlay"></div>
          <div class="post-info-main">
            <div class="post-info-main-wrapper">
              <h1>{{ post.title }}</h1>
              <p>{{ post.description }}</p>
            </div>
          </div>
        </div>
        <div class="post-info-sub">
          <div class="post-info-sub-wrapper">
            <div v-for="tag in post.tags.split(', ')" :key="tag" class="tags">
              <span class="single-tag">#{{ tag }}</span>
            </div>
            <div class="posted-date">
              <span class="created-date">{{ formatDate(post.createdAt) }}</span>
              <span
                v-if="diffDate(post.createdAt, post.updatedAt) > 0"
                class="updated-date"
              >
                (수정: {{ formatDate(post.updatedAt) }})
              </span>
            </div>
          </div>
        </div>
        <post-toc v-if="post.toc.length > 1" :toc="post.toc" />
        <div class="post-container">
          <div class="post-content">
            <nuxt-content class="post-content-wrapper" :document="post" />
          </div>
        </div>
      </article>
    </section>
    <prev-next :prev="prev" :next="next" />
    <comment />
  </div>
</template>

<script>
import GeoPattern from 'geopattern'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const postArray = await $content('posts', { deep: true })
        .where({ slug: params.slug })
        .fetch()
      const post = postArray[0]

      const [prev, next] = await $content('posts', { deep: true })
        .only(['title', 'slug', 'createdAt'])
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
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }
      const formattedTime = new Date(date).toLocaleDateString('kr', options)
      return formattedTime.replace(/. /g, '/').slice(0, -1)
    },
    diffDate(createdAtString, updatedAtString) {
      const createdAt = new Date(createdAtString)
      const updatedAt = new Date(updatedAtString)
      const createdDate = new Date(
        createdAt.getYear(),
        createdAt.getMonth(),
        createdAt.getDate(),
      )
      const updatedDate = new Date(
        updatedAt.getYear(),
        updatedAt.getMonth(),
        updatedAt.getDate(),
      )
      return updatedDate - createdDate
    },
    getPattern(title) {
      return GeoPattern.generate(title).toDataUrl()
    },
  },
}
</script>

<style lang="scss">
.post-article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-article-wrapper {
  width: 100%;
}

.post-img-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #00000055;
}

.post-img-wrapper .post-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000066;
}

.post-img {
  width: inherit;
  height: inherit;
}

.post-info-main {
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 25%;
  color: #ffffff;
}

.post-info-main-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.post-info-main-wrapper h1 {
  font-size: 44px;
}

.post-info-main-wrapper p {
  font-family: 'NanumSquare', sans-serif;
  font-size: 28px;
  margin-top: 10px;
}

.post-info-sub {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #dddddd;
}

.post-info-sub-wrapper {
  width: var(--container-xl);
  padding: 15px 30px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
  line-height: 130%;
}

.tags {
  display: inline;
  margin-right: 10px;
}

.tags:last-child {
  margin-right: 0;
}

.posted-date {
  float: right;
}

.post-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

.post-content {
  width: var(--container-xl);
  padding: 30px 30px;
}

.post-content-wrapper h1,
.post-content-wrapper h2,
.post-content-wrapper h3,
.post-content-wrapper h4 {
  margin: 10px 0;
}

.post-content-wrapper p {
  margin-bottom: 20px;
  line-height: 170%;
  font-size: 18px;
}

.post-content-wrapper p code {
  padding: 2px;
  background-color: #cccccc;
}

.post-content-wrapper p:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 1200px) {
  .post-info-main-wrapper,
  .post-info-sub-wrapper,
  .post-content {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .post-info-main-wrapper,
  .post-info-sub-wrapper,
  .post-content {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .post-info-main-wrapper,
  .post-info-sub-wrapper,
  .post-content {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
