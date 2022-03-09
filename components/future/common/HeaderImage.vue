<template>
  <section class="header-image-container">
    <div class="header-image-center">
      <h1>
        프론트엔드 개발자가 되기 위해<br />
        오늘도 공부하는 Sckroll의<br />
        홈페이지에 오신 것을 환영합니다.
      </h1>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section.header-image-container {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(to right, red, blue);
}
.header-image-center {
  height: calc(100% - $header-height);
  display: flex;
  align-items: center;
  padding: 0 32px;

  h1 {
    font-size: 2em;
    font-weight: 300;
  }
}

@include viewpoint-xl {
  .header-image-center {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .header-image-center {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .header-image-center {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .header-image-center {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .header-image-center {
    width: 100%;
  }
}
</style>
