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
export default {
  mounted() {
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
main {
  position: relative;
  margin-top: $header-height;
  display: flex;
  justify-content: center;
}
</style>
