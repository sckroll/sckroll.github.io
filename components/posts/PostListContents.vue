<template>
  <div class="post-list-contents">
    <post-list-item v-for="post in posts" :key="post.slug" :post="post" />
  </div>
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
@include set-viewpoint;

.post-list-contents {
  display: grid;
  justify-content: space-between;
  gap: $post-list-gap;
}

@include viewpoint-xl {
  .post-list-contents {
    grid-template-columns: repeat($post-list-column-xl, 1fr);
  }
}
@include viewpoint-lg {
  .post-list-contents {
    grid-template-columns: repeat($post-list-column-lg, 1fr);
  }
}
@include viewpoint-md {
  .post-list-contents {
    grid-template-columns: repeat($post-list-column-md, 1fr);
  }
}
@include viewpoint-sm {
  .post-list-contents {
    grid-template-columns: repeat($post-list-column-sm, 1fr);
  }
}
@include viewpoint-xs {
  .post-list-contents {
    grid-template-columns: repeat($post-list-column-xs, 1fr);
  }
}
</style>
