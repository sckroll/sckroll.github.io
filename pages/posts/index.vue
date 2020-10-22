<template>
  <div class="content-container">
    <header class="page-header">
      <header-menu />
    </header>
    <main class="content">
      <div class="post-list-wrapper">
        <h2 class="component-label">블로그 포스트</h2>
        <!-- <app-search-input /> -->
        <section class="post-list">
          <article v-for="post in posts" :key="post.slug" class="post-preview">
            <post-preview :post="post" />
          </article>
        </section>
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
.page-header {
  display: flex;
  justify-content: center;
  padding: 60px 0 20px 0;
  font-family: 'NanumSquare', sans-serif;
}

.post-list-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.post-list {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, var(--post-preview-width-xl));
  row-gap: 10px;
}

@media screen and (max-width: 1200px) {
  .post-list-wrapper {
    width: var(--container-lg);
  }
  .post-list {
    grid-template-columns: repeat(3, var(--post-preview-width-lg));
    row-gap: 13px;
  }
}

@media screen and (max-width: 992px) {
  .post-list-wrapper {
    width: var(--container-md);
  }
  .post-list {
    grid-template-columns: repeat(2, var(--post-preview-width-md));
    row-gap: 14px;
  }
}

@media screen and (max-width: 768px) {
  .post-list-wrapper {
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
