<template>
  <div class="new-page-container">
    <section class="header-area">
      <div class="header-area-center">
        <h1>
          프론트엔드 개발자가 되기 위해<br />
          오늘도 공부하는 Sckroll의<br />
          홈페이지에 오신 것을 환영합니다.
        </h1>
      </div>
    </section>
    <section class="content-area"></section>
  </div>
</template>

<script>
export default {
  layout: 'future',
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
  }
}
section.content-area {
}
</style>
