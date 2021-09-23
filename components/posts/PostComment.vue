<template>
  <section class="comment-container">
    <div ref="comment" class="comment-center viewpoint"></div>
  </section>
</template>

<script>
// 참고: https://junilhwang.github.io/TIL/Vuepress/Utterances/
export default {
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode
    },
  },
  watch: {
    isDarkMode(value) {
      // iframe에 메시지를 전달하기 위해 postMessage 사용
      // 출처: https://github.com/utterance/utterances/issues/170
      const colorMode = value ? 'dark' : 'light'
      const message = {
        type: 'set-theme',
        theme: `github-${colorMode}`,
      }

      // Utterances가 마운트되기 전에 호출될 수 있기 때문에 아래와 같이 조치
      let utterances = document.querySelector('iframe.utterances-frame')
      if (!utterances) {
        const timeoutId = setTimeout(() => {
          clearTimeout(timeoutId)
          utterances = document.querySelector('iframe.utterances-frame')
          utterances.contentWindow.postMessage(message, 'https://utteranc.es')
        }, 500)
      } else {
        utterances.contentWindow.postMessage(message, 'https://utteranc.es')
      }
    },
  },
  mounted() {
    const utterances = document.createElement('script')

    utterances.type = 'text/javascript'
    utterances.async = true
    utterances.crossOrigin = 'anonymous'
    utterances.src = 'https://utteranc.es/client.js'

    utterances.setAttribute('issue-term', 'pathname')
    utterances.setAttribute('repo', 'sckroll/sckroll.github.io')
    utterances.setAttribute('theme', 'github-light')

    this.$refs.comment.appendChild(utterances)
  },
}
</script>

<style lang="scss">
@include set-viewpoint;

.comment-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.comment-center {
  padding: 0 32px;
}
.utterances {
  max-width: 100%;
  z-index: 0;
}

@include viewpoint-xs {
  .comment-center {
    width: 100%;
  }
}
</style>
