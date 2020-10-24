<template>
  <div class="prev-next-nav">
    <div class="prev-next-nav-wrapper">
      <span class="prev-post">
        <span>이전 | </span>
        <nuxt-link
          v-if="prev"
          :to="{ name: 'posts/slug', params: { slug: prev.slug } }"
        >
          {{ prev.title }}
        </nuxt-link>
        <span v-else class="post-empty">이전 포스트가 없습니다.</span>
      </span>
      <span class="next-post">
        <nuxt-link
          v-if="next"
          :to="{ name: 'posts/slug', params: { slug: next.slug } }"
        >
          {{ next.title }}
        </nuxt-link>
        <span v-else class="post-empty">다음 포스트가 없습니다.</span>
        <span> | 다음</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style>
.prev-next-nav {
  display: flex;
  justify-content: center;
  background-color: #cccccc;
}

.prev-next-nav-wrapper {
  width: var(--container-xl);
  padding: 15px 30px;
  font-size: 20px;
}

.next-post {
  float: right;
}

.post-empty {
  color: #666666;
}
</style>
