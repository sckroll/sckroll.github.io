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
    grid-template-columns: repeat($preview-column-xl, 1fr);
    gap: $preview-gap;
  }
}
@include viewpoint-lg {
  section {
    grid-template-columns: repeat($preview-column-lg, 1fr);
    gap: $preview-gap;
  }
}
@include viewpoint-md {
  section {
    grid-template-columns: repeat($preview-column-md, 1fr);
    gap: $preview-gap;
  }
}
@include viewpoint-sm {
  section {
    grid-template-columns: repeat($preview-column-sm, 1fr);
    gap: $preview-gap;
  }
}
@include viewpoint-xs {
  section {
    grid-template-columns: repeat($preview-column-xs, 1fr);
    gap: $preview-gap;
  }
}
</style>
