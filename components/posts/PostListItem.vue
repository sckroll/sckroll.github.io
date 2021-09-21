<template>
  <nuxt-link :to="`/posts/${post.slug}`">
    <article>
      <div
        class="item-background"
        :style="`background: ${getPattern(post.title)};`"
      ></div>
      <div class="item-info-container">
        <div class="title-info">
          <h2 class="title">
            {{ trimTitle(post.title, maxTitleLength) }}
          </h2>
          <p class="description">
            {{ trimDescription(post.description, maxDescriptionLength) }}
          </p>
        </div>
        <div class="other-info">
          <div class="tags">
            <span
              v-for="tag in trimTags(post.tags, maxTagsLength)"
              :key="tag"
              class="tag"
              >#{{ tag }}</span
            >
          </div>
          <div class="created-date">{{ formatDate(post.createdAt) }}</div>
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
@include set-viewpoint;

article {
  height: 272px;
  box-shadow: 0 1px 2px 1px rgba(black, 0.2);
  transition: $fade-default;

  &:hover {
    box-shadow: 0 2px 8px 4px rgba(black, 0.15);
    transform: translateY(-2px);
    transition: $fade-default;
  }
  .item-background {
    width: 100%;
    height: 50%;
  }
}
.item-info-container {
  bottom: 0;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 3px solid transparent;
  padding: 16px;
  background-color: white;
  transition: $fade-default;
}
.title-info {
  .title {
    font-family: 'NanumSquare', sans-serif;
    font-size: 1.15em;
    font-weight: 700;
  }
  .description {
    font-size: 0.8em;
  }
}
.other-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  color: $sckroll-grey-1;

  .tags {
    display: inline;

    .tag {
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@include viewpoint-xl {
}
@include viewpoint-lg {
  .other-info {
    font-size: 0.7em;
  }
}
@include viewpoint-md {
  .other-info {
    font-size: 0.7em;
  }
}
@include viewpoint-sm {
}
@include viewpoint-xs {
}
</style>
