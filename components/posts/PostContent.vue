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

$hash-link-margin-top: $header-menu-height + 30px;

.nuxt-content-container {
  width: 100%;
}
.nuxt-content {
  h2 {
    font-weight: 700;
    font-size: 28px;
    margin: 30px 0 10px;

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
    font-size: 24px;
    margin: 10px 0;

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
    font-size: 18px;

    code {
      padding: 2px;
      background-color: #cccccc;
    }
    img {
      display: block;
      margin: 30px auto;
      border: 3px solid #dddddd;
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
    border-left: 10px solid #666666;
    background-color: #dddddd;
    margin: 15px 0;
    padding: 15px 30px;
  }
  a {
    border-bottom: 2px solid #666666;
    transition: all 0.2s ease;

    &:hover {
      border-bottom: 2px solid #cccccc;
      transition: all 0.2s ease;
    }
  }
  .nuxt-content-highlight {
    background-color: #3e3e3e;
    margin: 30px 0;

    .filename {
      display: block;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.1em;
      color: #ffffff;
      padding: 1em;
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

@include viewpoint-sm {
  .nuxt-content {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    p,
    ol,
    ul {
      font-size: 14px;
    }
  }
}
@include viewpoint-xs {
  .nuxt-content {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    p,
    ol,
    ul {
      font-size: 14px;
    }
  }
}
</style>
