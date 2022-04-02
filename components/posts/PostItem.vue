<template>
  <nuxt-link :to="`/posts/${post.slug}`">
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
        <div class="other-info">
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

<style lang="scss" scoped></style>
