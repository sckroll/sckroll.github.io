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
  display: flex;
  justify-content: center;
}

.comment-center {
  padding: 0 30px;
}

@include viewpoint-xl {
  .comment-center {
    width: $breakpoint-xl;
  }
}

@include viewpoint-lg {
  .comment-center {
    width: $breakpoint-lg;
  }
}

@include viewpoint-md {
  .comment-center {
    width: $breakpoint-md;
  }
}

@include viewpoint-sm {
  .comment-center {
    width: $breakpoint-sm;
  }
}

.utterances {
  max-width: 100%;
}
</style>
