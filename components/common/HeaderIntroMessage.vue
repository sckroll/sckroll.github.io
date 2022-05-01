<template>
  <div class="header-intro-message">
    <h1 class="display">
      프론트엔드 개발자가 되기 위해<br />
      오늘도 공부하는 Sckroll의<br />
      홈페이지에 오신 것을 환영합니다.
    </h1>
    <div class="underline-link">
      <nuxt-link to="/about">
        제가 누군지 궁금하세요?
        <div class="underline-outer">
          <div class="underline-inner"></div>
        </div>
      </nuxt-link>
    </div>
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
  .underline-link {
    display: flex;
  }
  a {
    font-size: 1.25em;
    border-bottom: none;
    /* padding-bottom: 4px; */
    /* border-bottom: 2px solid white; */

    &:hover {
      border-bottom: none;
      /* border-bottom: 2px solid $color-secondary; */

      .underline-inner {
        width: 100%;
      }
    }
    &:active {
      color: $color-secondary;
    }
    .underline-outer {
      margin-top: 4px;
      background-color: white;
    }
    .underline-inner {
      width: 0;
      height: 2px;
      background-color: $color-secondary;
      transition: width 0.2s $move-smooth;
    }
  }
}

@include viewpoint-sm {
  .header-intro-message {
    h1 {
      font-size: 1.5em;
    }
    a {
      font-size: 1.1em;
    }
  }
}
@include viewpoint-xs {
  .header-intro-message {
    h1 {
      font-size: 1.3em;
    }
    a {
      font-size: 1em;
    }
  }
}
</style>
