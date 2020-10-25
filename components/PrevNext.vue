<template>
  <div class="prev-next-nav">
    <div class="prev-next-nav-wrapper">
      <span class="prev-post">
        <span class="prev-next-label">이전 |</span>
        <nuxt-link
          v-if="prev"
          :to="{ name: 'posts/slug', params: { slug: prev.slug } }"
          >{{ prev.title }}</nuxt-link
        >
        <span v-else class="post-empty">이전 포스트가 없습니다.</span>
      </span>
      <span class="next-post">
        <nuxt-link
          v-if="next"
          :to="{ name: 'posts/slug', params: { slug: next.slug } }"
          >{{ next.title }}</nuxt-link
        >
        <span v-else class="post-empty">다음 포스트가 없습니다.</span>
        <span class="prev-next-label">| 다음</span>
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
  background-color: #dddddd;
}

.prev-next-nav-wrapper {
  width: var(--container-xl);
  padding: 15px 30px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
}

.prev-next-label {
  font-weight: 700;
}

.prev-post a {
  padding: 5px 5px;
  transition: all 0.1s ease;
}

.prev-post a:hover {
  background-color: #eeeeee;
  transition: all 0.1s ease;
}

.next-post {
  float: right;
}

.next-post a {
  padding: 5px 5px;
  transition: all 0.1s ease;
}

.next-post a:hover {
  background-color: #eeeeee;
  transition: all 0.1s ease;
}

.post-empty {
  color: #666666;
}
</style>
