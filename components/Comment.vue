<template>
  <section class="comment-container">
    <div ref="comment" class="comment-center viewpoint"></div>
  </section>
</template>

<script>
// 참고: https://junilhwang.github.io/TIL/Vuepress/Utterances/
export default {
  mounted() {
    const utterances = document.createElement('script')
    utterances.type = 'text/javascript'
    utterances.async = true
    utterances.crossOrigin = 'anonymous'
    utterances.src = 'https://utteranc.es/client.js'

    utterances.setAttribute('issue-term', 'pathname')
    utterances.setAttribute('theme', 'github-light')
    utterances.setAttribute('repo', 'sckroll/sckroll.github.io')

    this.$refs.comment.appendChild(utterances)
  },
}
</script>

<style lang="scss">
@include set-viewpoint;

.comment-container {
  display: flex;
  justify-content: center;
}

.comment-center {
  padding: 0 30px;
}

.utterances {
  max-width: 100%;
}
</style>
