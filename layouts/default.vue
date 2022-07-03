<template>
  <div class="container">
    <HeaderBase></HeaderBase>
    <HeaderImage></HeaderImage>
    <main>
      <Nuxt />
    </main>
    <FooterBase></FooterBase>
  </div>
</template>

<script>
import { breakpointLg, breakpointMd } from '@/assets/scss/main.scss'

export default {
  mounted() {
    // 모바일 브라우저 상태 바에 색상 적용
    const isDarkMode = window.__NUXT_COLOR_MODE__.value === 'dark'
    this.$store.commit('SET_DARK_MODE', isDarkMode)

    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth <= parseInt(breakpointMd.replace('px', ''))) {
        this.$store.commit('SET_TABLET_STATE', false)
        this.$store.commit('SET_MOBILE_STATE', true)
      } else if (
        window.innerWidth <= parseInt(breakpointLg.replace('px', ''))
      ) {
        this.$store.commit('SET_TABLET_STATE', true)
        this.$store.commit('SET_MOBILE_STATE', false)
      } else {
        this.$store.commit('SET_TABLET_STATE', false)
        this.$store.commit('SET_MOBILE_STATE', false)
      }
    },
  },
}
</script>

<style lang="scss">
.container {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
main {
  position: relative;
  margin-top: $header-height;
  display: flex;
  justify-content: center;
}
.page-container {
  padding: 0 32px;
}
.post-list-page {
  margin: 64px 0;
}

@include viewpoint-xl {
  .page-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .page-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .page-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .page-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .page-container {
    width: 100%;
  }
}
</style>
