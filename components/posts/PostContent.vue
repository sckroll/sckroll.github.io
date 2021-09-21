<template>
  <div class="post-content">
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@include set-viewpoint;

.post-content {
  width: 100%;
  flex: 4;
}

@include viewpoint-sm {
  .nuxt-content {
    h2 {
      font-size: 1.25em;
    }
    h3 {
      font-size: 1.1em;
    }
    p,
    ol,
    ul {
      font-size: 0.8em;
    }
  }
}
@include viewpoint-xs {
  .nuxt-content {
    h2 {
      font-size: 1.25em;
    }
    h3 {
      font-size: 1.1em;
    }
    p,
    ol,
    ul {
      font-size: 0.8em;
    }
  }
}
</style>
