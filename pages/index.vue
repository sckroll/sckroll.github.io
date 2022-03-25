<template>
  <div class="page-container">
    <section class="header-area">
      <div class="header-area-center">
        <h1>
          프론트엔드 개발자가 되기 위해<br />
          오늘도 공부하는 Sckroll의<br />
          홈페이지에 오신 것을 환영합니다.
        </h1>
        <nuxt-link to="/about">제가 누군지 궁금하세요?</nuxt-link>
      </div>
    </section>
    <section class="content-area">
      <PostList featured :posts="posts">
        <template v-slot:title>최근 포스트</template>
      </PostList>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const posts = await $content('posts', { deep: true })
        .only([
          'title',
          'description',
          'img',
          'slug',
          'tags',
          'createdAt',
          'updatedAt',
        ])
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()

      return {
        posts,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  data() {
    return {
      toggle: false,
    }
  },
  head() {
    return {
      title: '홈',
    }
  },
}
</script>

<style lang="scss">
.page-container {
  padding: 0 32px;
}
section.header-area {
  height: calc(70vh - $header-height);
  display: flex;
  align-items: center;
}
.header-area-center {
  h1 {
    font-size: 2em;
    font-weight: 300;
    margin-bottom: 32px;
    line-height: 1.5em;
  }
  a {
    font-size: 1.25em;
    padding-bottom: 4px;
    border-bottom: 2px solid white;
  }
}
section.content-area {
  margin: 32px 0;
}

@include viewpoint-xl {
  .page-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .page-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .page-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .page-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .page-container {
    width: 100%;
  }
}
</style>
