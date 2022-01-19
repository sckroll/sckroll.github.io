<template>
  <nuxt-link :to="`/${project ? 'projects' : 'posts'}/${post.slug}`">
    <article :class="{ thumbnail }">
      <div
        v-if="thumbnail"
        class="item-thumbnail"
        :style="`background-image: ${thumbnailImage};`"
      >
        <div class="thumbnail-overlay"></div>
      </div>
      <div class="item-info-container">
        <div class="main-info">
          <div class="title-container">
            <h2 class="title">
              {{ trimTitle(post.title, maxTitleLength) }}
            </h2>
          </div>
          <h3 class="description">
            {{ trimDescription(post.description, maxDescriptionLength) }}
          </h3>
        </div>
        <div v-if="project" class="other-info">
          <div class="period">개발 기간: {{ post.period }}</div>
          <div class="stacks">
            사용 스택:
            <project-stack
              v-for="(stack, index) in post.stacks"
              :key="index"
              :stack="stack"
            ></project-stack>
          </div>
        </div>
        <div v-else class="other-info">
          <div class="posted-date">
            <span class="created-date">{{ formatDate(post.createdAt) }}</span>
            <span
              v-if="diffDate(post.createdAt, post.updatedAt) > 0"
              class="updated-date"
            >
              (수정: {{ formatDate(post.updatedAt) }})
            </span>
          </div>
          <div class="tags">
            <span
              v-for="tag in trimTags(post.tags, maxTagsLength)"
              :key="tag"
              class="tag"
              >#{{ tag }}</span
            >
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
    thumbnail: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Boolean,
      default: false,
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
    thumbnailImage() {
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
article {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0;
  transition: $fade-default;

  &:hover {
    padding: 32px;
    box-shadow: 0 2px 8px 4px rgba(black, 0.15);
    background-color: white;
    transition: $fade-default;

    &.thumbnail {
      padding-top: 32px;
    }
    .title {
      border-bottom: 3px solid $color-primary;
    }
  }
  &.thumbnail {
    padding-top: 0;
  }
}
.dark-mode article {
  &:hover {
    background-color: $color-grey-1;
  }
}
.item-thumbnail {
  aspect-ratio: 32 / 9;
  background-position: center;
}
.thumbnail-overlay {
  height: 100%;
  background-color: rgba(black, 0.1);
}
.item-info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
  transition: $fade-default;
}
.main-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title-container {
  display: flex;
}
.title {
  padding-bottom: 4px;
  border-bottom: 3px solid transparent;
  font-family: 'NanumSquare', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  transition: $fade-default;
}
.description {
  font-size: 1.2em;
  color: $color-grey-3;
}
.dark-mode .description {
  color: $color-grey-5;
}
.other-info {
  display: flex;
  justify-content: space-between;
  color: $color-grey-3;

  .tags {
    display: flex;
    gap: 16px;
  }
}
.dark-mode .other-info {
  color: $color-grey-5;
}
.updated-date {
  color: $color-grey-5;
}
.dark-mode .updated-date {
  color: $color-grey-3;
}

@include viewpoint-xl {
}
@include viewpoint-lg {
}
@include viewpoint-md {
  .item-info-container {
    gap: 16px;
  }
  .title {
    font-size: 1.3em;
  }
  .description {
    font-size: 1.1em;
  }
  .other-info {
    font-size: 0.9em;
  }
}
@include viewpoint-sm {
  .item-info-container {
    gap: 16px;
  }
  .title {
    padding-bottom: 2px;
    font-size: 1.3em;
  }
  .description {
    font-size: 1.1em;
  }
  .other-info {
    font-size: 0.8em;

    .tags {
      gap: 8px;
    }
  }
}
@include viewpoint-xs {
  .item-info-container {
    gap: 16px;
  }
  .main-info {
    gap: 4px;
  }
  .title {
    padding-bottom: 2px;
    font-size: 1.2em;
  }
  .description {
    font-size: 1.1em;
  }
  .other-info {
    display: block;
    font-size: 0.8em;

    .tags {
      gap: 8px;
    }
  }
}
</style>
