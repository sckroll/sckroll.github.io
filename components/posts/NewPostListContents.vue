<template>
  <section class="post-list-contents">
    <PostItem v-for="post in posts" :key="post.slug" :post="post"></PostItem>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
section.post-list-contents {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  a {
    border-bottom: none;
  }
}

@include viewpoint-md {
  section.post-list-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}
@include viewpoint-sm {
  section.post-list-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}
@include viewpoint-xs {
  section.post-list-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
