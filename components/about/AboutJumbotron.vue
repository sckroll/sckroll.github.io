<template>
  <section class="about-jumbotron">
    <h1>Hi! I'm Seongchan Kim, a.k.a. Sckroll.</h1>
    <p>
      안녕하세요! 오늘도 코드 한 줄을 더 적는, 프론트엔드 개발자를 지망하는
      김성찬(Sckroll) 입니다.
    </p>
    <SvgBase class="scroll-icon-animation" width="48" height="48" icon>
      <IconScroll></IconScroll>
    </SvgBase>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: calc(100vh - #{$header-height} * 2);
  margin-bottom: $header-height;
}
h1 {
  font-size: 2.5em;
  font-weight: 500;
}
p {
  font-size: 1.5em;
  font-weight: 500;
}
.scroll-icon-animation {
  position: absolute;
  bottom: calc(-#{$header-height} / 2);
  right: 0;
}

@include viewpoint-md {
  section {
    gap: 8px;
  }
  h1 {
    font-size: 2em;
    font-weight: 500;
  }
  p {
    font-size: 1.25em;
    font-weight: 500;
  }
}
@include viewpoint-sm {
  section {
    gap: 8px;
  }
  h1 {
    font-size: 1.75em;
    font-weight: 500;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.5em;
  }
}
@include viewpoint-xs {
  section {
    gap: 8px;
  }
  h1 {
    font-size: 1.75em;
    font-weight: 500;
    line-height: 1.25em;
  }
  p {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.5em;
  }
}
</style>
