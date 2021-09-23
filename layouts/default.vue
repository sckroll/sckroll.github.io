<template>
  <div class="container">
    <HeaderBase></HeaderBase>
    <main class="main-container">
      <Nuxt />
    </main>
    <FooterBase></FooterBase>
  </div>
</template>

<script>
import { isDarkMode } from '~/utils/darkMode'

export default {
  mounted() {
    // 다크 모드 설정
    const darkModeState = isDarkMode()
    const colorMode = darkModeState ? 'dark' : 'light'
    document.documentElement.setAttribute('color-mode', colorMode)
    this.$store.commit('SET_DARK_MODE', darkModeState)

    // 모바일 브라우저 상태바 색상 변경
    const metaThemeColor = getComputedStyle(
      document.documentElement,
    ).getPropertyValue('--color-meta-theme')
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', metaThemeColor)
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

.main-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
