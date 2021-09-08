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
      <post-toc v-if="post.toc.length > 1" :toc="post.toc" />
    </section>
    <prev-next :prev="prev" :next="next" />
    <comment />
  </article>
</template>

<script>
import { getPattern } from '@/utils/pattern'
import { formatDate } from '@/utils/handleDate'

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
    h1 {
      font-size: 44px;
    }
    p {
      font-family: 'NanumSquare', sans-serif;
      font-size: 28px;
      margin-top: 8px;
    }
  }
  .info-sub {
    display: flex;
    justify-content: space-between;
    color: rgba(white, 0.5);
    margin: 8px 0;
    font-family: 'NanumSquare', sans-serif;
    font-size: 20px;
    line-height: 130%;
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
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  padding: 32px;
}

@include viewpoint-xl {
  .post-info,
  .content-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .post-info,
  .content-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .post-info {
    width: $breakpoint-md;

    .info-main {
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 24px;
      }
    }
    .info-sub {
      display: block;
      font-size: 16px;

      .posted-date {
        float: right;
      }
    }
  }
  .content-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .post-info {
    width: $breakpoint-sm;

    .info-main {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 20px;
      }
    }
    .info-sub {
      display: block;
      font-size: 14px;

      .posted-date {
        float: right;
      }
    }
  }
  .content-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .post-info {
    width: 100vw;

    .info-main {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 20px;
      }
    }
    .info-sub {
      display: block;
      font-size: 14px;

      .posted-date {
        float: right;
      }
    }
  }
  .content-container {
    width: 100vw;
  }
}
</style>
