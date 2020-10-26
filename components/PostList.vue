<template>
  <section class="content">
    <div class="post-list-container">
      <h2 class="component-label">블로그 포스트</h2>
      <!-- <app-search-input /> -->
      <section class="post-list">
        <article v-for="post in posts" :key="post.slug" class="post-preview">
          <post-preview :post="post" />
        </article>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.post-list-container {
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
