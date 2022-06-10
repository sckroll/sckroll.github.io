<template>
  <nuxt-link :to="`/posts/${post.slug}`">
    <article class="post-item">
      <div class="post-thumbnail" :style="`background-image: ${thumbnail};`">
        <div class="thumbnail-overlay"></div>
      </div>
      <div class="post-info-container">
        <div class="main-info">
          <h1 class="title">{{ post.title }}</h1>
          <h2 class="description">{{ post.description }}</h2>
        </div>
        <div class="other-info">
          <div class="posted-date">
            <div class="created-date">{{ formatDate(post.createdAt) }}</div>
            <div
              v-if="diffDate(post.createdAt, post.updatedAt) > 0"
              class="updated-date"
            >
              (수정: {{ formatDate(post.updatedAt) }})
            </div>
          </div>
          <div class="tags">
            <div
              v-for="tag in trimTags(post.tags, maxTagsLength)"
              :key="tag"
              class="tag"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-border"></div>
    </article>
  </nuxt-link>
</template>

<script>
import { getPattern } from '@/utils/pattern'
import { formatDate, diffDate } from '@/utils/handleDate'
import { trimTags } from '@/utils/handlePostInfo'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxTagsLength: 3,
    }
  },
  computed: {
    thumbnail() {
      return this.post.image
        ? `url(/images/projects/${this.post.image})`
        : this.getPattern(this.post.title)
    },
  },
  methods: {
    getPattern,
    formatDate,
    trimTags,
    diffDate,
  },
}
</script>

<style lang="scss" scoped>
article.post-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: $fade-default;

  &:hover {
    background-color: $color-grey-100;

    .title {
      color: $color-primary;
    }
    .bottom-border {
      width: 100%;
    }
  }
}
.post-thumbnail {
  aspect-ratio: 16 / 9;
  flex: 3;
  background-position: center;
}
.thumbnail-overlay {
  height: 100%;
  background-color: rgba(black, 0.1);
}
.post-info-container {
  padding: 32px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 1.4em;
    transition: $fade-default;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: $color-grey-600;
    font-size: 1.1em;
    font-weight: 500;
  }
  .other-info {
    display: flex;
    justify-content: space-between;
    color: $color-grey-600;
  }
  .posted-date {
    display: flex;
    gap: 8px;
  }
  .updated-date {
    color: $color-grey-400;
  }
  .tags {
    display: flex;
    gap: 16px;
  }
}
.bottom-border {
  width: 0;
  height: 8px;
  background-color: $color-primary;
  transition: width 0.2s $move-smooth;
}

.dark-mode {
  article.post-item {
    background-color: $color-grey-800;

    &:hover {
      background-color: $color-grey-700;

      .title {
        color: $color-secondary;
      }
    }
  }
  .description {
    color: $color-grey-400;
  }
  .other-info {
    color: $color-grey-400;
  }
  .updated-date {
    color: $color-grey-600;
  }
  .bottom-border {
    background-color: $color-secondary;
  }
}

@include viewpoint-lg {
  .post-info-container {
    .other-info {
      flex-direction: column;
      gap: 8px;
    }
    .tags {
      justify-content: flex-end;
      gap: 8px;
    }
  }
}
@include viewpoint-md {
  .post-info-container {
    padding: 24px;

    .main-info {
      gap: 4px;
    }
    .title {
      font-size: 1.2em;
    }
    .description {
      font-size: 1em;
    }
    .other-info {
      flex-direction: column;
      gap: 4px;
      font-size: 0.8em;
    }
    .posted-date {
      gap: 4px;
    }
    .tags {
      justify-content: flex-end;
      gap: 8px;
    }
  }
}
@include viewpoint-sm {
  .post-info-container {
    gap: 8px;

    .title {
      padding-bottom: 2px;
      font-size: 1.25em;
    }
    .description {
      font-size: 1em;
    }
    .other-info {
      flex-direction: column;
      gap: 4px;
      font-size: 0.9em;
    }
    .tags {
      justify-content: flex-end;
      gap: 8px;
    }
  }
}
@include viewpoint-xs {
  .post-info-container {
    gap: 8px;

    .title {
      padding-bottom: 2px;
      font-size: 1.25em;
    }
    .description {
      font-size: 1em;
    }
    .other-info {
      flex-direction: column;
      gap: 4px;
      font-size: 0.8em;
    }
    .tags {
      justify-content: flex-end;
      gap: 8px;
    }
  }
}
</style>
