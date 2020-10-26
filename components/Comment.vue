<template>
  <div class="comment">
    <div ref="comment" class="comment-wrapper"></div>
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

<style>
.comment {
  position: relative;
  display: flex;
  justify-content: center;
}

.comment-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.utterances {
  max-width: 100%;
}

@media screen and (max-width: 1200px) {
  .comment-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .comment-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .comment-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
