<template>
  <div class="content-container">
    <header class="page-header">
      <header-menu />
    </header>
    <section class="about">
      <div class="about-wrapper">
        <nuxt-content :document="article" />
      </div>
    </section>
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
  /* flex-flow: column;
  align-items: center; */
  justify-content: center;
  font-family: 'NanumSquare', sans-serif;
}

.about-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.about-hello {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: calc(100vh - var(--header-menu-height));
  font-size: 40px;
  line-height: 150%;
}

.about-intro {
  height: calc(100vh - var(--header-menu-height));
  font-size: 32px;
  line-height: 150%;
}

.about-skills {
  height: calc(100vh - var(--header-menu-height));
  font-size: 32px;
  line-height: 150%;
}
</style>
