<template>
  <nuxt-content :document="post" />
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

.nuxt-content-container {
  margin-right: 48px;
  flex: 4;
}

@include viewpoint-md {
  .nuxt-content-container {
    margin-right: 0;
  }
}
@include viewpoint-sm {
  .nuxt-content-container {
    margin-right: 0;
  }
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
  .nuxt-content-container {
    margin-right: 0;
  }
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
