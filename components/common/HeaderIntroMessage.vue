<template>
  <div class="header-intro-message">
    <h1>
      프론트엔드 개발자가 되기 위해<br />
      오늘도 공부하는 Sckroll의<br />
      홈페이지에 오신 것을 환영합니다.
    </h1>
    <nuxt-link to="/about">제가 누군지 궁금하세요?</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-intro-message {
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

    &:hover {
      border-bottom: 2px solid $color-secondary;
    }
    &:active {
      color: $color-secondary;
    }
  }
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
