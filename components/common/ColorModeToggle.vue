<template>
  <IconLink
    class="color-mode-toggle"
    :reverse="hasHeaderImage && !isMobileMenuVisible"
    :scroll="hasHeaderImage && !isMobileMenuVisible"
    :fix="hasHeaderImage && !isMobileMenuVisible"
    @click="toggleColorMode"
  >
    <SvgBase icon>
      <IconDark v-if="isDarkMode"></IconDark>
      <IconLight v-else></IconLight>
    </SvgBase>
  </IconLink>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode
    },
    hasHeaderImage() {
      if (this.drawer) return false
      return this.$store.state.hasHeaderImage
    },
    isScrolled() {
      if (this.drawer) return false
      return this.$store.state.isScrolled
    },
    isMobileMenuVisible() {
      return this.$store.state.isMobileMenuOpened
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
  z-index: 20;
  cursor: pointer;
  display: flex;
}
</style>
