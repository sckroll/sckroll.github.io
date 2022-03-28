<template>
  <div
    class="color-mode-toggle icon-link"
    :class="{ 'fix-light': hasHeaderImage, scrolled: isScrolled }"
    @click="toggleColorMode"
  >
    <SvgBase icon>
      <IconDark v-if="isDarkMode"></IconDark>
      <IconLight v-else></IconLight>
    </SvgBase>
  </div>
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

  &.fix-light,
  &.scrolled {
    &.icon-link {
      &:hover {
        border: 2px solid rgba(white, 0.5);
      }
      svg {
        fill: white;
      }
    }
  }
}
</style>
