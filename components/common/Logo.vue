<template>
  <nuxt-link
    to="/"
    class="logo-container"
    :class="{ 'fix-light': hasHeaderImage, scrolled: isScrolled }"
  >
    <transition name="fade">
      <SvgBase v-if="!isScrolled" width="102" height="24">
        <LogoText></LogoText>
      </SvgBase>
    </transition>
    <SvgBase class="logo-icon">
      <IconLogo></IconLogo>
    </SvgBase>
  </nuxt-link>
</template>

<script>
export default {
  computed: {
    hasHeaderImage() {
      return this.$store.state.hasHeaderImage
    },
    isScrolled() {
      return this.$store.state.isScrolled
    },
  },
}
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  gap: 24px;
  align-items: center;
  border-bottom: none;
  transition: $fade-default;

  &:hover,
  &:active {
    border-bottom: none;
  }
  &.fix-light svg {
    fill: white;
  }
  &.scrolled svg {
    fill: white;
  }
}
</style>
