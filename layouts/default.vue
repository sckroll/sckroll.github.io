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
// import { isDarkMode } from '~/utils/darkMode'

export default {
  mounted() {
    // 다크 모드 설정
    // const darkModeState = isDarkMode()
    // this.$store.commit('SET_DARK_MODE', darkModeState)

    // 모바일 브라우저 상태 바에 색상 적용
    const isDarkMode = window.__NUXT_COLOR_MODE__.value === 'dark'
    this.$store.commit('SET_DARK_MODE', isDarkMode)
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
