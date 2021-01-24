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
  async asyncData({ $content, error }) {
    try {
      const article = await $content('about/about').fetch()
      return { article }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data() {
    return {
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (items, observer) => {
        items.forEach(item => {
          if (item.isIntersecting) {
            console.log(item)
            // item.target.classList.add('article-show')
            item.target.style.opacity = '1'
            observer.unobserve(item.target)
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    const articles = document.querySelectorAll('article.about-article')
    articles.forEach(article => {
      this.observer.observe(article)
    })
  },
  beforeDestroy() {
    this.observer = null
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
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

.about-hello {
  height: calc(90vh - var(--header-menu-height));
  font-size: 40px;
}

.about-intro {
  height: calc(80vh - var(--header-menu-height));
  font-size: 24px;
}

.about-skills {
  height: calc(90vh - var(--header-menu-height));
  font-size: 24px;
}

.about-experiences {
  height: calc(120vh - var(--header-menu-height));
  font-size: 24px;
}

.about-exp-events {
  font-size: 24px;
}

.about-etc {
  height: calc(100vh - var(--header-menu-height));
  font-size: 24px;
}
</style>
