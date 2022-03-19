<template>
  <div class="new-page-container">
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
      <h1>컴포넌트 테스트</h1>
      <ToggleSwitch v-model="toggle"></ToggleSwitch>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.new-page-container {
  width: 1200px;
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
    transition: all 0.15s ease;

    &:hover {
      color: $color-primary;
      border-bottom: 2px solid $color-primary;
    }
  }
}
section.content-area {
  margin: 32px 0;
}
</style>
