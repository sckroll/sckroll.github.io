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
.nuxt-content-container {
  width: 100%;
}

h1,
h2,
h3,
h4 {
  margin: 10px 0;
}

p {
  margin-bottom: 20px;
  line-height: 170%;
  font-size: 18px;

  code {
    padding: 2px;
    background-color: #cccccc;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

blockquote {
  border-left: 10px solid #666666;
  background-color: #dddddd;
  margin: 15px 0;
  padding: 15px 30px;
}

.nuxt-content-highlight {
  background-color: #3e3e3e;
  margin: 10px 0;

  .filename {
    display: block;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #ffffff;
    padding: 1em;
  }
  .language-js {
    margin: 0;
  }
}
</style>
