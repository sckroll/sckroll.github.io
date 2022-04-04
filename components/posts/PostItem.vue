<template>
  <nuxt-link :to="`/posts/${post.slug}`">
    <article class="post-item">
      <div class="post-thumbnail" :style="`background-image: ${thumbnail};`">
        <div class="thumbnail-overlay"></div>
      </div>
      <div class="post-info-container">
        <h2 class="title">{{ post.title }}</h2>
        <h3 class="description">{{ post.description }}</h3>
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
  border: 2px solid $color-grey-5;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  transition: $fade-default;

  &:hover {
    background-color: $color-grey-7;

    &.thumbnail {
      padding-top: 32px;
    }
    .title {
      border-bottom: 2px solid $color-primary;
    }
  }
  &:active {
    border: 2px solid $color-primary;
  }
}
.post-thumbnail {
  aspect-ratio: 16 / 9;
  background-position: center;
}
.thumbnail-overlay {
  height: 100%;
  background-color: rgba(black, 0.1);
}
.post-info-container {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
    transition: $fade-default;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: $color-grey-3;
  }
  .other-info {
    display: flex;
    justify-content: space-between;
    color: $color-grey-3;
  }
  .posted-date {
    display: flex;
    gap: 8px;
  }
  .updated-date {
    color: $color-grey-5;
  }
  .tags {
    display: flex;
    gap: 16px;
  }
}

.dark-mode {
  article.post-item {
    border: 2px solid $color-grey-5;
  }
  .description {
    color: $color-grey-5;
  }
  .other-info {
    color: $color-grey-5;
  }
  .updated-date {
    color: $color-grey-3;
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
