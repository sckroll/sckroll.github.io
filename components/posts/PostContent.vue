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
}

@include viewpoint-xl {
  .nuxt-content-container {
    width: 100%;
  }
}
@include viewpoint-lg {
  .nuxt-content-container {
    width: 70%;
  }
}
@include viewpoint-md {
  .nuxt-content-container {
    width: 100%;
    margin-right: 0;
  }
}
@include viewpoint-sm {
  .nuxt-content-container {
    width: 100%;
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
    width: 100%;
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
