<template>
  <div class="container">
    <NewHeaderBase></NewHeaderBase>
  </div>
</template>

<script>
export default {
  mounted() {
    // 모바일 브라우저 상태 바에 색상 적용
    const isDarkMode = window.__NUXT_COLOR_MODE__.value === 'dark'
    this.$store.commit('SET_DARK_MODE', isDarkMode)
  },
  head() {
    return {
      title: '컴포넌트 테스트',
    }
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
</style>
