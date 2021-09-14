<template>
  <article>
    <div class="post-background">
      <div
        class="post-background-img"
        :style="`background: ${getPattern(post.title)};`"
      >
        <div class="post-background-overlay">
          <section class="post-info">
            <div class="info-main">
              <h1>{{ post.title }}</h1>
              <p>{{ post.description }}</p>
            </div>
            <div class="info-sub">
              <div>
                <div
                  v-for="tag in post.tags.split(', ')"
                  :key="tag"
                  class="tags"
                >
                  <span class="tag">#{{ tag }}</span>
                </div>
              </div>
              <div class="posted-date">
                <span class="created-date">{{
                  formatDate(post.createdAt)
                }}</span>
                <span
                  v-if="diffDate(post.createdAt, post.updatedAt) > 0"
                  class="updated-date"
                >
                  (수정: {{ formatDate(post.updatedAt) }})
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <section class="content-container">
      <post-content :post="post" />
      <template v-if="isMobile && post.toc.length > 1">
        <div class="toc-mobile-button click-block" @click="toggleTocMenu">
          목차
        </div>
        <post-toc-mobile v-model="tocMenu" :toc="post.toc" />
      </template>
      <template v-else>
        <post-toc v-if="post.toc.length > 1" :toc="post.toc" />
      </template>
    </section>
    <prev-next :prev="prev" :next="next" />
    <comment />
  </article>
</template>

<script>
import { getPattern } from '@/utils/pattern'
import { formatDate } from '@/utils/handleDate'
import { breakpointLg } from '@/assets/scss/main.scss'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const postArray = await $content('posts', { deep: true, text: true })
        .where({ slug: params.slug })
        .fetch()

      if (postArray.length === 0) {
        error({ statusCode: 404 })
      }
      const post = postArray[0]

      const [prev, next] = await $content('posts', { deep: true })
        .only(['title', 'slug', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { post, prev, next }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  data() {
    return {
      isMobile: false,
      tocMenu: false,
    }
  },
  mounted() {
    this.resizeListener()
    window.addEventListener('resize', this.resizeListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeListener)
  },
  methods: {
    getPattern,
    formatDate,
    diffDate(createdAtString, updatedAtString) {
      const createdAt = new Date(createdAtString)
      const updatedAt = new Date(updatedAtString)
      const createdDate = new Date(
        createdAt.getYear(),
        createdAt.getMonth(),
        createdAt.getDate(),
      )
      const updatedDate = new Date(
        updatedAt.getYear(),
        updatedAt.getMonth(),
        updatedAt.getDate(),
      )
      return updatedDate - createdDate
    },
    resizeListener() {
      this.isMobile =
        window.innerWidth <= parseInt(breakpointLg.replace('px', ''))
    },
    toggleTocMenu() {
      this.tocMenu = !this.tocMenu
    },
  },
}
</script>

<style lang="scss">
@include set-viewpoint;

$background-height: 70vh;

article {
  margin-bottom: 32px;
}
.post-background {
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $background-height;
  }
  &-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(black, 0.3);
  }
}
.post-info {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 32px;

  .info-main {
    p {
      font-family: 'NanumSquare', sans-serif;
      margin-top: 8px;
    }
  }
  .info-sub {
    display: flex;
    justify-content: space-between;
    color: rgba(white, 0.5);
    margin: 8px 0;
  }
}
.tags {
  display: inline;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
}
.content-container {
  margin-top: $background-height;
  position: relative;
  display: flex;
  width: 100%;
  padding: 64px 32px;
}
.toc-mobile-button {
  cursor: pointer;
  z-index: 1;
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 8px 16px;
  background-color: white;
  box-shadow: 0 1px 2px 1px rgba(black, 0.2);
  font-size: 1.25em;
  transition: $fade-default;

  &:hover {
    box-shadow: 0 2px 4px 2px rgba(black, 0.15);
    transition: $fade-default;
  }
}

@include viewpoint-xl {
  .post-info,
  .content-container {
    width: $breakpoint-xl;
  }
  .info-main {
    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 1.5em;
    }
  }
  .info-sub {
    font-size: 1em;
  }
}
@include viewpoint-lg {
  .post-info,
  .content-container {
    width: $breakpoint-lg;
  }
  .info-main {
    h1 {
      font-size: 2.25em;
    }
    p {
      font-size: 1.25em;
    }
  }
  .info-sub {
    font-size: 1em;
  }
}
@include viewpoint-md {
  .post-info {
    width: $breakpoint-md;
  }
  .content-container {
    width: $breakpoint-md;
  }
  .info-main {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.25em;
    }
  }
  .info-sub {
    font-size: 0.9em;
  }
}
@include viewpoint-sm {
  .post-info {
    width: $breakpoint-sm;
  }
  .content-container {
    width: $breakpoint-sm;
  }
  .info-main {
    h1 {
      font-size: 1.75em;
    }
    p {
      font-size: 1.1em;
    }
  }
  .info-sub {
    font-size: 0.8em;
  }
}
@include viewpoint-xs {
  .post-info {
    width: 100vw;

    .info-sub {
      display: block;
    }
  }
  .content-container {
    width: 100vw;
  }
  .info-main {
    h1 {
      font-size: 1.75em;
    }
    p {
      font-size: 1.1em;
    }
  }
  .info-sub {
    font-size: 0.8em;

    .posted-date {
      float: right;
    }
  }
}
</style>
