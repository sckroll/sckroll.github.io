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

.about-article {
  display: flex;
  flex-flow: column;
  justify-content: center;
  line-height: 150%;
}

.about-hello {
  height: calc(100vh - var(--header-menu-height));
  font-size: 40px;
}

.about-intro {
  height: calc(100vh - var(--header-menu-height));
  font-size: 32px;
}

.about-skills {
  height: calc(100vh - var(--header-menu-height));
  font-size: 32px;
}

.about-experiences {
  /* height: calc(100vh - var(--header-menu-height)); */
  font-size: 32px;
}

.about-projects {
  /* height: calc(100vh - var(--header-menu-height)); */
  font-size: 32px;
}

.about-history {
  /* height: calc(100vh - var(--header-menu-height)); */
  font-size: 32px;
}

.about-tmi {
  /* height: calc(100vh - var(--header-menu-height)); */
  font-size: 32px;
}

.about-contacts {
  /* height: calc(100vh - var(--header-menu-height)); */
  font-size: 32px;
}
</style>
