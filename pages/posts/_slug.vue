<template>
  <div class="post-container">
    <section class="post-img-container">
      <div
        class="post-img"
        :style="`background: ${getPattern(post.title)};`"
      ></div>
      <div class="post-img-overlay"></div>
    </section>
    <section class="post-article-container">
      <article>
        <header class="post-info">
          <div class="info-main">
            <h1>{{ post.title }}</h1>
            <p>{{ post.description }}</p>
          </div>
          <div class="info-sub">
            <div>
              <div v-for="tag in post.tags.split(', ')" :key="tag" class="tags">
                <span class="tag">#{{ tag }}</span>
              </div>
            </div>
            <div class="posted-date">
              <span class="created-date">{{ formatDate(post.createdAt) }}</span>
              <span
                v-if="diffDate(post.createdAt, post.updatedAt) > 0"
                class="updated-date"
              >
                (수정: {{ formatDate(post.updatedAt) }})
              </span>
            </div>
          </div>
        </header>
        <post-toc v-if="post.toc.length > 1" :toc="post.toc" />
        <div class="content-container">
          <post-content :post="post" />
        </div>
      </article>
    </section>
    <prev-next :prev="prev" :next="next" />
    <comment />
  </div>
</template>

<script>
import GeoPattern from 'geopattern'
import { formatDate } from '@/lib/handleDate'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const postArray = await $content('posts', { deep: true })
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
  methods: {
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
    getPattern(title) {
      return GeoPattern.generate(title).toDataUrl()
    },
  },
}
</script>

<style lang="scss">
@include set-viewpoint;

$background-height: 70vh;

.post-img-container {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $background-height;
  background-color: #00000055;

  .post-img {
    width: inherit;
    height: inherit;
  }
  .post-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: #00000066;
  }
}
.post-article-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(#{$background-height} - 50px - #{$header-menu-height});
  color: #ffffff;
  padding: 30px;

  .info-main {
    h1 {
      font-size: 44px;
    }
    p {
      font-family: 'NanumSquare', sans-serif;
      font-size: 28px;
      margin-top: 10px;
    }
  }
  .info-sub {
    display: flex;
    justify-content: space-between;
    color: #ffffff88;
    margin: 10px 0;
    font-family: 'NanumSquare', sans-serif;
    font-size: 20px;
    line-height: 130%;
  }
}
.tags {
  display: inline;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
}
.content-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 30px;
}

@include viewpoint-xl {
  .post-article-container,
  .content-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .post-article-container,
  .content-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .post-article-container,
  .content-container {
    width: $breakpoint-md;
  }
  .post-info {
    .info-main {
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 24px;
      }
    }
    .info-sub {
      font-size: 16px;
    }
  }
}
@include viewpoint-sm {
  .post-article-container,
  .content-container {
    width: $breakpoint-sm;
  }
  .post-info {
    .info-main {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 20px;
      }
    }
    .info-sub {
      font-size: 14px;
    }
  }
}
</style>
