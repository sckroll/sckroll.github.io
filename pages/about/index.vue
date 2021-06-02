<template>
  <section class="about-container">
    <div class="about-wrapper">
      <nuxt-content :document="article" />
    </div>
  </section>
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

<style lang="scss">
@include set-viewpoint;

.emphasized {
  background-color: #000000;
  color: #ffffff;
}

.about {
  display: flex;
  justify-content: center;
  font-family: 'NanumSquare', sans-serif;

  &-wrapper {
    padding: 0 30px;
  }
  &-article {
    display: flex;
    flex-flow: column;
    justify-content: center;
    line-height: 150%;
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }
  &-hello {
    height: calc(90vh - #{$header-menu-height});
    font-size: 40px;
  }
  &-intro {
    height: calc(80vh - #{$header-menu-height});
    font-size: 24px;
  }
  &-skills {
    height: calc(90vh - #{$header-menu-height});
    font-size: 24px;
  }
  &-experiences {
    height: calc(120vh - #{$header-menu-height});
    font-size: 24px;
  }
  &-exp-events {
    font-size: 24px;
  }
  &-etc {
    height: calc(100vh - #{$header-menu-height});
    font-size: 24px;
  }
}

@include viewpoint-xl {
  .about-wrapper {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .about-wrapper {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .about-wrapper {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .about-wrapper {
    width: $breakpoint-sm;
  }
}
</style>
