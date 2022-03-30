<template>
  <nuxt-link :to="`/posts/${post.slug}`"> </nuxt-link>
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
