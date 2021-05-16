<template>
  <div class="prev-next-nav">
    <div class="wrapper">
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

<style lang="scss" scoped>
.prev-next-nav {
  display: flex;
  justify-content: center;
  background-color: #dddddd;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
  line-height: 130%;
}

@include viewpoint-xl {
  .wrapper {
    width: $breakpoint-xl;
  }
}

@include viewpoint-lg {
  .wrapper {
    width: $breakpoint-lg;
  }
}

@include viewpoint-md {
  .wrapper {
    width: $breakpoint-md;
  }
}

@include viewpoint-sm {
  .wrapper {
    width: $breakpoint-sm;
  }
}

.post-link {
  .post-label {
    font-weight: 700;
  }

  .post-empty {
    color: #666666;
  }

  a {
    padding: 5px 5px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #eeeeee;
      transition: all 0.2s ease;
    }
  }
}
</style>
