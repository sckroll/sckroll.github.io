<template>
  <div class="post-list-contents">
    <template v-if="project">
      <list-item
        v-for="currProject in posts"
        :key="currProject.slug"
        :post="currProject"
        thumbnail
        project
      />
    </template>
    <template v-else>
      <template v-if="featured">
        <list-item thumbnail :post="featuredPost" />
        <list-item v-for="post in otherPosts" :key="post.slug" :post="post" />
      </template>
      <template v-else>
        <list-item v-for="post in posts" :key="post.slug" :post="post" />
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    featuredPost() {
      return this.posts[0]
    },
    otherPosts() {
      return this.posts.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.post-list-contents {
  display: flex;
  flex-direction: column;

  * {
    border-bottom: 1px solid $color-grey-7;
    transition: $fade-default;

    &:last-child {
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }
    }
    &:hover {
      border-bottom: 1px solid transparent;
      transition: $fade-default;
    }
  }
}
.dark-mode .post-list-contents {
  * {
    border-bottom: 1px solid $color-grey-1;
  }
}
</style>
