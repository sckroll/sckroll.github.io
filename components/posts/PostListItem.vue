<template>
  <nuxt-link :to="`/posts/${post.slug}`">
    <article>
      <div
        v-if="featured"
        class="item-background"
        :style="`background: ${getPattern(post.title)};`"
      ></div>
      <div class="item-info-container">
        <div class="title-container">
          <h2 class="title">
            {{ trimTitle(post.title, maxTitleLength) }}
          </h2>
        </div>
        <p class="description">
          {{ trimDescription(post.description, maxDescriptionLength) }}
        </p>
        <div class="other-info">
          <div class="created-date">{{ formatDate(post.createdAt) }}</div>
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
    featured: {
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
  methods: {
    getPattern,
    formatDate,
    trimTitle,
    trimTags,
    trimDescription,
  },
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
  transition: $fade-default;

  &:hover {
    padding: 32px;
    box-shadow: 0 2px 8px 4px rgba(black, 0.15);
    /* transform: translateY(-2px); */
    transition: $fade-default;

    .title {
      border-bottom: 3px solid $color-primary;
    }
  }
}
.item-background {
  aspect-ratio: 32 / 9;
}
.item-info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  transition: $fade-default;
}
.title-container {
  display: flex;
}
.title {
  padding-bottom: 4px;
  border-bottom: 3px solid $color-grey-6;
  font-family: 'NanumSquare', sans-serif;
  font-size: 1.75em;
  font-weight: 700;
  transition: $fade-default;
}
.description {
  font-size: 1.2em;
  color: $color-grey-3;
}
.other-info {
  display: flex;
  justify-content: space-between;
  color: var(--color-sheet-info);

  .tags {
    display: flex;
    gap: 16px;
  }
}

@include viewpoint-xl {
}
@include viewpoint-lg {
}
@include viewpoint-md {
  .title {
    font-size: 1.5em;
  }
  .description {
    font-size: 1.1em;
  }
  .other-info {
    font-size: 0.9em;
  }
}
@include viewpoint-sm {
  .title {
    font-size: 1.5em;
  }
  .description {
    font-size: 1.1em;
  }
  .other-info {
    font-size: 0.8em;
  }
}
@include viewpoint-xs {
  article {
    gap: 16px;
  }
  .title {
    font-size: 1.5em;
  }
  .description {
    font-size: 1.1em;
  }
  .other-info {
    font-size: 0.8em;
  }
}
</style>
