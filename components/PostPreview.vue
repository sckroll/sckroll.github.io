<template>
  <figure ref="preview" class="preview-container">
    <img :src="post.img" :alt="post.title" class="preview-img" />
    <figcaption class="preview-info">
      <h3 class="preview-title">{{ post.title }}</h3>
      <p class="preview-description">{{ post.description }}</p>
      <div class="preview-other">
        <div
          v-for="(tag, index) in post.tags"
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
  },
}
</script>

<style>
.preview-container {
  display: inline-block;
  position: relative;
  width: 300px;
  height: 300px;
}

.preview-container:hover .preview-description {
  display: block;
  animation: fadeIn ease-out 0.4s;
}

/* *:hover .preview-description {
  animation: fadeOut ease-out 0.4s;
  display: none;
} */

.preview-img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.preview-info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff88;
  /* color: #ffffff; */
  font-family: 'NanumSquare', sans-serif;
  padding: 15px;
  backdrop-filter: blur(3px);
}

.preview-title {
  font-size: 24px;
}

.preview-description {
  display: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.preview-other {
  font-size: 14px;
  color: #444444;
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
</style>
