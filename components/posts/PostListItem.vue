<template>
  <article>
    <nuxt-link :to="`posts/${post.slug}`" class="post-link">
      <div class="preview-container">
        <div class="preview-img-container">
          <div
            class="preview-img"
            :style="`background: ${getPattern(post.title)};`"
          ></div>
        </div>
        <div class="preview-info">
          <div class="title-info">
            <h3 class="preview-title">
              {{ trimTitle(post.title) }}
            </h3>
            <p class="preview-description">
              {{ trimDescription(post.description) }}
            </p>
          </div>
          <div class="other-info">
            <div class="preview-tags">
              <span
                v-for="tag in trimTags(post.tags)"
                :key="tag"
                class="preview-tag"
                >#{{ tag }}</span
              >
            </div>
            <div class="preview-date">{{ formatDate(post.createdAt) }}</div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
import { getPattern } from '@/utils/pattern.js'
import { formatDate } from '@/utils/handleDate'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxTitleLength: 50,
      maxTagsLength: 10,
      maxDescriptionLength: 100,
    }
  },
  methods: {
    getPattern,
    formatDate,
    trimTitle(title) {
      if (title.length > this.maxTitleLength) {
        return title.slice(0, this.maxTitleLength).concat('...')
      }
      return title
    },
    trimTags(tagStr) {
      const tags = tagStr.split(', ')
      if (tags.length > this.maxTagsLength) {
        return tags.slice(0, this.maxTagsLength)
      }
      return tags
    },
    trimDescription(description) {
      if (description.length > this.maxDescriptionLength) {
        return description.slice(0, this.maxDescriptionLength).concat('...')
      }
      return description
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

article {
  margin-bottom: 20px;
  transition: all 0.2s ease;

  &:only-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: #eeeeee;
    transition: all 0.2s ease;
  }
}
.preview-container {
  display: flex;
  width: 100%;
  padding: 10px 0;

  .preview-img {
    min-width: 150px;
    min-height: 150px;
  }
}
.preview-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 30px;

  .preview-title {
    font-family: 'NanumSquare', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  .preview-description {
    font-size: 16px;
  }
}
.other-info {
  font-size: 14px;
  color: #333333;

  .preview-tag {
    display: inline;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
  .preview-date {
    font-weight: 600;
  }
}

@include viewpoint-xs {
  .preview-container {
    .preview-img {
      min-width: 100px;
      min-height: 100px;
    }
    .preview-title {
      font-size: 20px;
    }
    .preview-description {
      font-size: 14px;
    }
  }
  .preview-info {
    width: calc(100% - 100px - 20px);
    margin-left: 20px;
  }
}
</style>
