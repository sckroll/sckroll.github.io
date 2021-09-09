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

$hash-link-margin-top: $header-height + 32px;

.nuxt-content-container {
  margin-right: 48px;
}
.nuxt-content {
  h2 {
    font-weight: 700;
    font-size: 1.5em;
    margin: 48px 0 16px;

    &:first-child {
      margin-top: 0;
    }
    &::before {
      content: '';
      display: block;
      height: $hash-link-margin-top;
      margin-top: -#{$hash-link-margin-top};
      visibility: hidden;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 1.25em;
    margin: 32px 0 8px;

    &::before {
      content: '';
      display: block;
      height: $hash-link-margin-top;
      margin-top: -#{$hash-link-margin-top};
      visibility: hidden;
    }
  }
  p,
  ol,
  ul {
    line-height: 170%;

    code {
      padding: 2px;
      background-color: $sckroll-grey-6;
    }
    img {
      display: block;
      margin: 32px auto;
      box-shadow: 0 1px 2px 1px rgba(black, 0.2);
      max-width: 100%;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  pre {
    code {
      padding: 0;
      background-color: transparent;
    }
  }
  blockquote {
    border-left: 8px solid $sckroll-primary;
    background-color: $sckroll-grey-6;
    margin: 16px 0;
    padding: 16px 32px;
  }
  a {
    border-bottom: 2px solid $sckroll-grey-4;
    transition: $fade-default;

    &:hover {
      border-bottom: 2px solid $sckroll-primary;
      transition: $fade-default;
    }
    &:active {
      color: $sckroll-primary;
      transition: $fade-default;
    }
  }
  .nuxt-content-highlight {
    background-color: $sckroll-grey-2;
    margin: 32px 0;

    .filename {
      display: block;
      font-size: 0.8em;
      color: white;
      padding: 8px 16px;
    }
    .language-js,
    .language-python,
    .language-html,
    .language-css,
    .language-scss {
      margin: 0;
    }
  }
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
