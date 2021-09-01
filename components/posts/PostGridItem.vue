<template>
  <nuxt-link :to="`posts/${post.slug}`">
    <article>
      <div class="preview-info-container">
        <div class="title-info">
          <h3 class="preview-title">
            {{ trimTitle(post.title, maxTitleLength) }}
          </h3>
          <h3 class="preview-title-active">
            {{ trimActiveTitle(post.title, maxActiveTitleLength) }}
          </h3>
          <p class="preview-description">
            {{ trimDescription(post.description, maxDescriptionLength) }}
          </p>
        </div>
        <div class="other-info">
          <div
            v-for="tag in trimTags(post.tags, maxTagsLength)"
            :key="tag"
            class="preview-tags"
          >
            <span class="preview-tag">#{{ tag }}</span>
          </div>
          <div class="preview-date">{{ formatDate(post.createdAt) }}</div>
        </div>
      </div>
      <div class="preview-background-container">
        <div
          class="preview-background"
          :style="`background: ${getPattern(post.title)};`"
        ></div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import { getPattern } from '@/utils/pattern'
import { formatDate } from '@/utils/handleDate'
import {
  trimTitle,
  trimActiveTitle,
  trimTags,
  trimDescription,
} from '@/utils/handlePostInfo'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxTitleLength: 16,
      maxActiveTitleLength: 31,
      maxTagsLength: 3,
      maxDescriptionLength: 70,
    }
  },
  methods: {
    getPattern,
    formatDate,
    trimTitle,
    trimActiveTitle,
    trimTags,
    trimDescription,
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

@keyframes FadeIn {
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: auto;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    height: auto;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}

article {
  position: relative;

  &:hover {
    .preview-info-container {
      height: 70%;
      background-color: rgba(white, 0.5);
      transition: $fade-post;
    }
    .preview-title {
      opacity: 0;
      height: 0;
    }
    .preview-title-active {
      opacity: 1;
      height: auto;
      animation: FadeIn 0.2s ease;
      font-size: 1.15em;
    }
    .preview-description {
      opacity: 1;
      height: auto;
      animation: FadeIn 0.5s ease;
    }
  }
}
.preview-info-container {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  padding: 16px;
  background-color: rgba(white, 0.3);
  transition: $fade-post;
}
.title-info {
  .preview-title {
    opacity: 1;
    font-family: 'NanumSquare', sans-serif;
    font-size: 1.15em;
    font-weight: 700;
  }
  .preview-title-active {
    opacity: 0;
    height: 0;
    font-size: 0;
    font-weight: 700;
  }
  .preview-description {
    opacity: 0;
    height: 0;
    font-size: 0.8em;
  }
}
.other-info {
  font-size: 0.8em;
  color: $sckroll-grey-1;

  .preview-tags {
    display: inline;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
}
.preview-background-container,
.preview-background {
  width: inherit;
  height: inherit;
}

@include viewpoint-xl {
  article {
    height: calc(
      (#{$breakpoint-xl} - 64px + #{$preview-gap}) / #{$preview-column-xl} - #{$preview-gap}
    );
  }
}
@include viewpoint-lg {
  article {
    height: calc(
      (#{$breakpoint-lg} - 64px + #{$preview-gap}) / #{$preview-column-lg} - #{$preview-gap}
    );
  }
  .other-info {
    font-size: 0.7em;
  }
}
@include viewpoint-md {
  article {
    height: calc(
      (#{$breakpoint-md} - 64px + #{$preview-gap}) / #{$preview-column-md} - #{$preview-gap}
    );
  }
  .other-info {
    font-size: 0.7em;
  }
}
@include viewpoint-sm {
  article {
    height: calc(
      (#{$breakpoint-sm} - 64px + #{$preview-gap}) / #{$preview-column-sm} - #{$preview-gap}
    );
  }
}
@include viewpoint-xs {
  article {
    height: calc(
      (100vw - 64px + #{$preview-gap}) / #{$preview-column-xs} - #{$preview-gap}
    );
  }
}
</style>
