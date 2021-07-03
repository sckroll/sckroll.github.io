<template>
  <article>
    <nuxt-link :to="`posts/${post.slug}`" class="post-link">
      <div class="preview-container">
        <div
          class="preview-img"
          :style="`background: ${getPattern(post.title)};`"
        ></div>
        <div class="preview-info">
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
            <span class="preview-date">{{ formatDate(post.createdAt) }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </article>
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
      maxTitleLength: 17,
      maxActiveTitleLength: 31,
      maxTagsLength: 3,
      maxDescriptionLength: 33,
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
@keyframes titleFadeIn {
  0% {
    opacity: 0;
    height: 0;
  }
  10% {
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

.post-link {
  display: inline-block;
  height: 0;
}
.preview-container {
  display: inline-block;
  position: relative;
  overflow: hidden;

  &:hover .preview-title {
    opacity: 0;
    height: 0;
    /* animation: fadeOut 0.05s ease; */
  }
  &:hover .preview-title-active {
    opacity: 1;
    height: auto;
    animation: titleFadeIn 0.05s ease;
    font-size: 20px;
  }
  &:hover .preview-info {
    height: 60%;
    transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  }
  &:hover .preview-description {
    opacity: 1;
    height: auto;
    animation: FadeIn 0.5s ease;
  }
  .preview-img {
    width: inherit;
    height: inherit;
  }
}
.preview-info {
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 35%;
  background-color: #eeeeee99;
  padding: 15px;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);

  .preview-title {
    opacity: 1;
    font-family: 'NanumSquare', sans-serif;
    font-size: 20px;
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
    font-size: 14px;
  }
}
.other-info {
  font-size: 14px;
  color: #333333;

  .preview-tags {
    display: inline;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
  .preview-date {
    float: right;
  }
}

@include viewpoint-xl {
  .preview-container {
    width: $thumbnail-width-xl;
    height: $thumbnail-width-xl;
  }
}
@include viewpoint-lg {
  .preview-container {
    width: $thumbnail-width-lg;
    height: $thumbnail-width-lg;
  }
}
@include viewpoint-md {
  .preview-container {
    width: $thumbnail-width-md;
    height: $thumbnail-width-md;

    &:hover .preview-title-active {
      font-size: 16px;
    }
  }
  .preview-info {
    height: 40%;

    .preview-title {
      font-size: 16px;
    }
  }
}
@include viewpoint-sm {
  .preview-container {
    width: $breakpoint-sm - 60px;
    height: $breakpoint-sm - 60px;

    &:hover .preview-info {
      height: 50%;
    }
    &:hover .preview-title-active {
      font-size: 28px;
    }
    .preview-description {
      font-size: 20px;
    }
  }
  .preview-info {
    height: 30%;

    .preview-title {
      font-size: 28px;
    }
  }
  .other-info {
    font-size: 20px;
  }
}
</style>
