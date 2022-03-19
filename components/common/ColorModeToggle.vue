<template>
  <div class="color-mode-toggle" @click="toggleColorMode">
    <SvgBase
      icon
      :class="{ 'fix-light': hasHeaderImage, scrolled: isScrolled }"
    >
      <IconDark v-if="isDarkMode"></IconDark>
      <IconLight v-else></IconLight>
    </SvgBase>
  </div>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode
    },
    hasHeaderImage() {
      return this.$store.state.hasHeaderImage
    },
    isScrolled() {
      return this.$store.state.isScrolled
    },
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference = this.isDarkMode ? 'light' : 'dark'
      this.$store.commit('SET_DARK_MODE', !this.isDarkMode)
    },
  },
}
</script>

<style lang="scss" scoped>
.color-mode-toggle {
  cursor: pointer;
  display: flex;
}
svg {
  transition: $fade-default;

  &.fix-light {
    fill: white;
  }
  &.scrolled {
    fill: white;
  }
}
</style>
