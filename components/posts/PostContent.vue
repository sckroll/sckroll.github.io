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
  width: 80%;
  padding-right: 32px;
}
.nuxt-content {
  h3 {
    &::before {
      content: '';
      display: block;
      height: $hash-link-margin-top;
      margin-top: -#{$hash-link-margin-top};
      visibility: hidden;
    }
  }
}

@include viewpoint-md {
  .post-content {
    width: 100%;
    padding-right: 0;
  }
}
@include viewpoint-sm {
  .post-content {
    width: 100%;
    padding-right: 0;
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
  .post-content {
    width: 100%;
    padding-right: 0;
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
