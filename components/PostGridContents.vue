<template>
  <section>
    <div v-for="post in results.length > 0 ? results : posts" :key="post.slug">
      <post-grid-item :post="post" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

section {
  display: grid;
  justify-content: space-between;
}

@include viewpoint-xl {
  section {
    grid-template-columns: repeat(4, $thumbnail-width-xl);
    row-gap: 10px;
  }
}
@include viewpoint-lg {
  section {
    grid-template-columns: repeat(3, $thumbnail-width-lg);
    row-gap: 13px;
  }
}
@include viewpoint-md {
  section {
    grid-template-columns: repeat(3, $thumbnail-width-md);
    row-gap: 5px;
  }
}
@include viewpoint-sm {
  section {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
}
</style>
