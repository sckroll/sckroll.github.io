<template>
  <nuxt-link :to="{ path: `posts/${post.slug}` }" class="post-link">
    <figure ref="preview" class="preview-container">
      <img
        :src="post.img"
        :alt="post.alt"
        class="preview-img"
        draggable="false"
        onContextMenu="return false"
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
            v-for="tag in trimTags(post.tags)"
            :key="tag"
            class="preview-tags"
          >
            <span class="preview-tag">#{{ tag }}</span>
          </div>
          <span class="preview-date">{{ formatDate(post.createdAt) }}</span>
        </div>
      </figcaption>
    </figure>
  </nuxt-link>
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
      // year: 0,
      // month: 0,
      // day: 0,
      maxTitleLength: 10,
      maxActiveTitleLength: 25,
      maxTagsLength: 3,
      maxDescriptionLength: 33,
    }
  },
  // mounted() {
  //   const ms = Date.parse(this.post.createdAt)
  //   const dateObj = new Date(ms)

  //   this.year = dateObj.getFullYear()
  //   this.month = this.addZero(dateObj.getMonth() + 1)
  //   this.day = this.addZero(dateObj.getDate())
  // },
  methods: {
    // addZero(num) {
    //   const result = (num < 10 ? '0' : '') + num.toString(10)
    //   return result
    // },
    formatDate(date) {
      const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      }
      const formattedDate = new Date(date).toLocaleDateString('kr', options)
      return formattedDate.replace(/. /g, '/').slice(0, -1)
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
.post-link {
  display: inline-block;
  height: 0;
}

.preview-container {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: var(--post-preview-width-xl);
  height: var(--post-preview-width-xl);
}

.preview-container:hover .preview-title {
  opacity: 0;
  height: 0;
  animation: fadeOut 0.05s ease;
}

.preview-container:hover .preview-title-active {
  opacity: 1;
  height: auto;
  animation: titleFadeIn 0.05s ease;
  font-size: 20px;
}

.preview-container:hover .preview-info {
  height: 60%;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
}

.preview-container:hover .preview-description {
  opacity: 1;
  height: auto;
  animation: FadeIn 0.5s ease;
}

.preview-container:hover .preview-img {
  transform: scale(1.1);
  transition: all 0.5s ease;
}

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

.preview-img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  transition: all 0.5s ease;
}

.preview-info {
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 30%;
  background-color: #eeeeee99;
  padding: 15px;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
}

.preview-title {
  opacity: 1;
  font-family: 'NanumSquare', sans-serif;
  height: auto;
  font-size: 20px;
  font-weight: 700;
}

.preview-title-active {
  opacity: 0;
  height: 0;
  font-size: 0;
}

.preview-description {
  opacity: 0;
  height: 0;
  font-size: 14px;
}

.preview-other {
  font-size: 14px;
  color: #333333;
}

.preview-tags {
  display: inline;
  margin-right: 5px;
}

.preview-tags:last-child {
  margin-right: 0;
}

.preview-date {
  float: right;
}

@media screen and (max-width: 1200px) {
  .preview-container {
    width: var(--post-preview-width-lg);
    height: var(--post-preview-width-lg);
  }
}

@media screen and (max-width: 992px) {
  .preview-container {
    width: var(--post-preview-width-md);
    height: var(--post-preview-width-md);
  }
  .preview-container:hover .preview-info {
    height: 50%;
  }
}

@media screen and (max-width: 768px) {
  .preview-container {
    width: calc(var(--container-sm) - 60px);
    height: calc(var(--container-sm) - 60px);
  }
}

@media screen and (max-width: 576px) {
}
</style>
