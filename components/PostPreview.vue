<template>
  <figure ref="preview" class="preview-container">
    <img
      :src="post.img"
      :alt="post.title"
      class="preview-img"
      draggable="false"
    />
    <figcaption class="preview-info">
      <div class="preview-title-wrapper">
        <h3 class="preview-title">{{ trimTitle(post.title) }}</h3>
        <h3 class="preview-title preview-title-active">
          {{ trimActiveTitle(post.title) }}
        </h3>
        <p class="preview-description">
          {{ trimDescription(post.description) }}
        </p>
      </div>
      <div class="preview-other">
        <div
          v-for="(tag, index) in trimTags(post.tags)"
          :key="index"
          class="preview-tags"
        >
          <span class="preview-tag">#{{ tag }}</span>
        </div>
        <span class="preview-date">{{ formatDate(post.createdAt) }}</span>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxTitleLength: 13,
      maxActiveTitleLength: 24,
      maxTagsLength: 3,
      maxDescriptionLength: 46,
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }
      const formattedTime = new Date(date).toLocaleDateString('kr', options)
      return formattedTime.replace(/. /g, '/').slice(0, -1)
    },
    trimTitle(title) {
      if (title.length > this.maxTitleLength) {
        return title.slice(0, this.maxTitleLength).concat('...')
      }
      return title
    },
    trimActiveTitle(title) {
      if (title.length > this.maxActiveTitleLength) {
        return title.slice(0, this.maxActiveTitleLength).concat('...')
      }
      return title
    },
    trimTags(tags) {
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

<style>
.preview-container {
  display: inline-block;
  position: relative;
  width: var(--post-preview-width);
  height: var(--post-preview-width);
}

.preview-container:hover .preview-title {
  opacity: 0;
  height: 0;
  animation: titleFadeOut 0.05s ease;
}

.preview-container:hover .preview-title-active {
  opacity: 1;
  height: auto;
  animation: titleFadeIn 0.05s ease;
}

.preview-container:hover .preview-info {
  height: 50%;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
}

.preview-container:hover .preview-description {
  opacity: 1;
  height: auto;
  animation: descriptionFadeIn 0.5s ease;
}

@keyframes descriptionFadeIn {
  0% {
    opacity: 0;
    height: 0;
  }
  20% {
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

@keyframes titleFadeOut {
  0% {
    opacity: 1;
    height: auto;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}

.preview-img {
  width: var(--post-preview-width);
  height: var(--post-preview-width);
  object-fit: cover;
}

.preview-info {
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 30%;
  background-color: #eeeeee66;
  font-family: 'NanumSquare', sans-serif;
  padding: 15px;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
}

.preview-title {
  opacity: 1;
  height: auto;
  font-size: 24px;
}

.preview-title-active {
  opacity: 0;
  height: 0;
  font-size: 24px;
}

.preview-description {
  opacity: 0;
  height: 0;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
}

.preview-other {
  font-size: 14px;
  color: #333333;
  /* z-index: 1; */
}

.preview-tags {
  display: inline;
}

.preview-tag {
  margin-right: 5px;
}

.preview-date {
  float: right;
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 576px) {
}
</style>
