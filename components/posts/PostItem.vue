<template>
  <nuxt-link :to="`/posts/${post.slug}`">
    <article class="post-item">
      <div class="post-thumbnail" :style="`background-image: ${thumbnail};`">
        <div class="thumbnail-overlay"></div>
      </div>
      <div class="post-info-container">
        <div class="main-info">
          <h2 class="title">{{ post.title }}</h2>
          <h3 class="description">{{ post.description }}</h3>
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
import { formatDate } from '@/utils/handleDate'
import { trimTitle, trimTags, trimDescription } from '@/utils/handlePostInfo'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxTitleLength: 35,
      maxTagsLength: 3,
      maxDescriptionLength: 70,
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
    trimTitle,
    trimTags,
    trimDescription,
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
  flex: 2;
  background-position: center;
}
.thumbnail-overlay {
  height: 100%;
  background-color: rgba(black, 0.1);
}
.post-info-container {
  padding: 32px;
  flex: 1;
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
    padding-bottom: 4px;
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
  transition: width 0.2s cubic-bezier(0, 0.7, 0, 1);
}

.dark-mode {
  article.post-item {
    background-color: $color-grey-800;

    &:hover {
      background-color: $color-grey-700;

      .title {
        color: white;
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
}

@include viewpoint-lg {
  .post-info-container {
    .other-info {
      display: block;
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
      display: block;
      font-size: 0.8em;
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
      display: block;
      font-size: 0.8em;
    }
    .tags {
      justify-content: flex-end;
      gap: 8px;
    }
  }
}
</style>
