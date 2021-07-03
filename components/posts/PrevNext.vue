<template>
  <section class="prev-next-nav">
    <div class="wrapper viewpoint">
      <span class="post-link">
        <span class="post-label">&lt; 다음 |</span>
        <nuxt-link v-if="next" :to="{ path: next.slug }">{{
          next.title
        }}</nuxt-link>
        <span v-else class="post-empty">다음 포스트가 없습니다.</span>
      </span>
      <span class="post-link">
        <nuxt-link v-if="prev" :to="{ path: prev.slug }">{{
          prev.title
        }}</nuxt-link>
        <span v-else class="post-empty">이전 포스트가 없습니다.</span>
        <span class="post-label">| 이전 &gt;</span>
      </span>
    </div>
  </section>
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

<style lang="scss" scoped>
@include set-viewpoint;

.prev-next-nav {
  display: flex;
  justify-content: center;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
  line-height: 180%;
}
.post-link {
  a {
    padding: 5px 5px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #eeeeee;
      transition: all 0.2s ease;
    }
  }
  .post-label {
    font-weight: 700;
  }
  .post-empty {
    color: #666666;
  }
  &:last-of-type {
    text-align: right;
  }
}

@include viewpoint-md {
  .wrapper {
    flex-direction: column;
  }
}
@include viewpoint-sm {
  .wrapper {
    flex-direction: column;
    font-size: 16px;
  }
}
@include viewpoint-xs {
  .wrapper {
    flex-direction: column;
    font-size: 16px;
    width: 100%;
  }
}
</style>
