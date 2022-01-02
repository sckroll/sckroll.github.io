<template>
  <div class="about-page">
    <template v-if="isLoaded">
      <about-section
        v-for="(currSection, index) in sections"
        :key="index"
        :section-name="currSection.name"
        :content="currSection.content"
        :brace="!currSection.title"
        :observer="observer"
        :index="index"
        :is-show="currSection.isShow"
      >
        <template #before-brace>{{ currSection.beforeBrace }}</template>
        <template #brace-content>{{ currSection.braceContent }}</template>
        <template #after-brace>{{ currSection.afterBrace }}</template>
        <template #title>{{ currSection.title }}</template>

        <template v-if="!currSection.content" #custom-content>
          <component :is="sectionName(currSection.name)"></component>
        </template>
      </about-section>
    </template>
  </div>
</template>

<script>
export default {
  components: {
    AboutExperiences: () => import('@/components/about/AboutExperiences.vue'),
  },
  async asyncData({ $content, error }) {
    try {
      const intro = await $content('about/intro').fetch()
      const skills = await $content('about/skills').fetch()
      const projects = await $content('about/projects').fetch()
      const etc = await $content('about/etc').fetch()
      const contacts = await $content('about/contacts').fetch()

      return {
        intro,
        skills,
        projects,
        etc,
        contacts,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  data() {
    return {
      sections: [
        {
          name: 'intro',
          beforeBrace: '`안녕하세요.\n',
          braceContent: '게으르지만 꾸준한 개발자',
          afterBrace: '\n김성찬 (Sckroll) 입니다.`',
          isShow: false,
        },
        {
          name: 'skills',
          beforeBrace: '`제가 가진',
          braceContent: '스킬',
          afterBrace: '은\n다음과 같습니다.`',
          isShow: false,
        },
        {
          name: 'experiences',
          beforeBrace: '`저는 지금까지 다음과 같은\n',
          braceContent: '경험',
          afterBrace: '을 했습니다.`',
          isShow: false,
        },
        {
          name: 'projects',
          beforeBrace: '`다음과 같은',
          braceContent: '프로젝트',
          afterBrace: '를\n개발했습니다.`',
          isShow: false,
        },
        {
          name: 'etc',
          title: 'Etc.',
          isShow: false,
        },
        {
          name: 'contacts',
          title: '연락처 및 링크',
          isShow: false,
        },
      ],
      isLoaded: false,
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (items, observer) => {
        items.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            this.showSection(target.dataset.index)
            observer.unobserve(target)
          }
        })
      },
      {
        rootMargin: '0px 0px -25%',
        threshold: 0,
      },
    )

    for (const section of this.sections) {
      section.content = this[section.name]
    }
    this.isLoaded = true
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    sectionName(name) {
      if (name === 'experiences') {
        return 'AboutExperiences'
      }
    },
    showSection(sectionIndex) {
      this.sections[sectionIndex].isShow = true
    },
  },
  head() {
    return {
      title: '소개',
    }
  },
}
</script>

<style lang="scss">
.about-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: $header-height;
  padding: 32px 0;

  .nuxt-content {
    a {
      border-bottom: 2px solid $color-grey-5;
      transition: $fade-default;

      &:hover {
        border-bottom: 2px solid $color-primary;
        transition: $fade-default;
      }
      &:active {
        color: $color-primary;
        transition: $fade-default;
      }
    }
    p {
      margin-bottom: 32px;
      font-size: 1.1em;
      line-height: 170%;

      &:last-child {
        margin-bottom: 0;
      }
    }
    ul {
      margin-bottom: 48px;
      padding-left: 24px;
      list-style: circle;
      font-size: 1.1em;
      line-height: 170%;

      &:last-child {
        margin-bottom: 0;
      }
    }
    h3 {
      font-size: 1.25em;
      font-weight: 900;
      margin: 0 0 16px;

      &::before {
        content: '';
        height: 0;
        margin-top: 0;
      }
    }
  }
}

@include viewpoint-lg {
  .about-page {
    .nuxt-content {
      p {
        font-size: 1em;
      }
      ul {
        font-size: 1em;
      }
      h3 {
        font-size: 1.2em;
      }
    }
  }
}
@include viewpoint-md {
  .about-page {
    .nuxt-content {
      p {
        font-size: 1em;
      }
      ul {
        font-size: 1em;
      }
      h3 {
        font-size: 1.2em;
      }
    }
  }
}
@include viewpoint-sm {
  .about-page {
    .nuxt-content {
      p {
        font-size: 0.9em;
      }
      ul {
        margin-bottom: 32px;
        font-size: 0.9em;
      }
      h3 {
        font-size: 1.1em;
      }
    }
  }
}
@include viewpoint-xs {
  .about-page {
    .nuxt-content {
      p {
        font-size: 0.9em;
      }
      ul {
        margin-bottom: 32px;
        font-size: 0.9em;
      }
      h3 {
        font-size: 1.1em;
      }
    }
  }
}
</style>
