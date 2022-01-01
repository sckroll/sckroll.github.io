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
.prev-next-nav {
  display: flex;
  justify-content: center;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 1.25em;
  line-height: 180%;
}
.post-link {
  a {
    padding: 4px 0;
    border-bottom: 3px solid transparent;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
    &:active {
      color: $color-primary;
      transition: $fade-default;
    }
  }
  .post-label {
    font-weight: 700;
  }
  .post-empty {
    color: $color-grey-4;
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
    font-size: 1.1em;
  }
}
@include viewpoint-xs {
  .wrapper {
    flex-direction: column;
    font-size: 1.1em;
    width: 100%;
  }
}
</style>
