<template>
  <div class="logo-container">
    <div
      class="logo-area"
      :class="{ 'fix-light': hasHeaderImage, scrolled: isScrolled }"
    >
      <SvgBase
        class="logo-text"
        :class="{ scrolled: isScrolled }"
        width="102"
        height="24"
      >
        <LogoText></LogoText>
      </SvgBase>
      <SvgBase class="logo-icon">
        <IconLogo></IconLogo>
      </SvgBase>
    </div>
    <nuxt-link
      to="/"
      class="logo-link"
      :class="{ scrolled: isScrolled }"
    ></nuxt-link>
  </div>
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
}
.logo-link {
  position: absolute;
  width: 158px;
  height: 32px;
  border-bottom: none;
  padding: 0;

  &:hover,
  &:active {
    border-bottom: none;
  }
  &.scrolled {
    width: 32px;
  }
}
.logo-area {
  display: flex;
  gap: 24px;
  align-items: center;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0, 0.7, 0, 1);

  &.fix-light svg {
    fill: white;
  }
  &.scrolled {
    transform: translateX(-126px);

    svg {
      fill: white;
    }
  }

  .logo-text {
    opacity: 1;
    transition: opacity 0.2s cubic-bezier(0, 0.7, 0, 1);

    &.scrolled {
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0, 0.7, 0, 1);
    }
  }
}
</style>
