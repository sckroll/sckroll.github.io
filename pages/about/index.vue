<template>
  <div class="content-container">
    <header class="page-header">
      <header-menu />
    </header>
    <div class="about">
      <section class="about-wrapper about-hello">
        <p class="about-hello-text">
          안녕하세요!<br />
          <strong>프론트엔드 개발자</strong>를 꿈꾸는<br />
          <strong class="emphasized">Sckroll(김성찬)</strong> 이라고 합니다.
        </p>
      </section>
      <section class="about-wrapper about-intro">
        <p class="about-intro-text">
          웹 프론트엔드(Front-End) 개발자가 되고자 끊임없이 공부하는
          20대입니다.<br />
          대학 과제로 웹 사이트를 만드는 과정에서 PC나 모바일에 상관없이 웹을
          통해<br />
          동일한 서비스를 사용자에게 제공할 수 있다는 점이 매력적으로
          다가왔습니다.<br />
          특히 사용자가 직접 볼 수 있고 소통할 수 있는 프론트엔드 부분이 마음에
          들었고,<br />
          제가 원하는 대로 화면을 디자인하는 것이 재미있었기 때문에<br />
          지금의 진로를 결정하게 되었습니다.<br />
          프론트엔드 개발자를 지향하지만, 백엔드 기술에도 관심이 있어서<br />
          서버와 API를 구성하고 웹앱을 클라우드로 배포해본 경험이 있습니다.<br />
          장기적으로는 FE와 BE를 아우르는 풀스택 개발자가 되고 싶습니다.
        </p>
      </section>
      <nuxt-content :document="article" class="about-wrapper" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('about/about').fetch()
      return { article }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
}
</script>

<style>
.emphasized {
  background-color: #000000;
  color: #ffffff;
}

.about {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: 'NanumSquare', sans-serif;
}

.about-wrapper {
  display: flex;
  align-items: center;
  width: var(--container-xl);
  padding: 0 30px;
}

.about-hello {
  height: calc(100vh - var(--header-menu-height));
}

.about-hello-text {
  font-size: 40px;
  line-height: 150%;
}

.about-intro {
  /* height: calc(100vh - var(--header-menu-height)); */
}

.about-intro-text {
  font-size: 32px;
  line-height: 150%;
}
</style>
