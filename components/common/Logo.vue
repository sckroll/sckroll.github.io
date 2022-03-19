<template>
  <nuxt-link
    to="/"
    class="logo-container"
    :class="{ 'fix-light': hasHeaderImage, scrolled: isScrolled }"
  >
    <SvgBase width="102" height="24">
      <LogoText></LogoText>
    </SvgBase>
    <SvgBase>
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
  transition: $fade-default;

  &.fix-light svg {
    fill: white;
  }
  &.scrolled svg {
    fill: white;
  }
}
</style>
