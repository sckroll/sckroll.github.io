<template>
  <section class="about-jumbotron">
    <h1>Hi! I'm Seongchan Kim, a.k.a. Sckroll.</h1>
    <p>
      안녕하세요! 게으르지만 꾸준한 예비 프론트엔드 개발자 김성찬(Sckroll)
      입니다.
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
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
</style>
