<template>
  <article>
    <div class="post-background">
      <section class="post-info">
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
      </section>
    </div>
    <post-content-container :post="post"></post-content-container>
    <post-prev-next :prev="prev" :next="next" />
    <post-comment />
  </article>
</template>

<script>
import { getPattern } from '@/utils/pattern'
import { formatDate } from '@/utils/handleDate'

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
  created() {
    this.$store.commit('SET_HEADER_IMAGE', getPattern(this.post.title))
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
  head() {
    return {
      title: `${this.post.title} | 포스트`,
    }
  },
}
</script>

<style lang="scss">
$background-height: 70vh;

article {
  margin-bottom: 32px;
}
.post-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(#{$background-height} - #{$header-height});
  display: flex;
  justify-content: center;
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

@include viewpoint-xl {
  .post-info {
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
  .post-info {
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
