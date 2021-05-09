<template>
  <div class="comment-container">
    <div ref="comment" class="comment-center"></div>
  </div>
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
.comment-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.comment-center {
  width: var(--container-xl);
  padding: 0 30px;
}

.utterances {
  max-width: 100%;
}

@media screen and (max-width: 1200px) {
  .comment-center {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .comment-center {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .comment-center {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
