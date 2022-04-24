<template>
  <div class="logo-container">
    <div
      class="logo-area"
      :class="{
        'fix-light': hasHeaderImage,
        scrolled: isScrolled,
        'mobile-menu': isVisible,
      }"
    >
      <SvgBase
        class="logo-text"
        :class="{ scrolled: isScrolled, 'mobile-menu': isVisible }"
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
      :class="{ scrolled: isScrolled, 'mobile-menu': isVisible }"
      @click.native="closeMenu"
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
    isVisible() {
      return this.$store.state.isMobileMenuOpened
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit('SET_MOBILE_MENU_STATE', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.logo-container {
  z-index: 20;
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
  &.mobile-menu {
    width: 158px;
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
      fill: black;
    }
  }
  &.mobile-menu {
    transform: translateX(0);
  }

  .logo-text {
    opacity: 1;
    transition: opacity 0.2s cubic-bezier(0, 0.7, 0, 1);

    &.scrolled {
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0, 0.7, 0, 1);
    }
    &.mobile-menu {
      opacity: 1;
    }
  }
}
.dark-mode {
  .logo-area {
    &.scrolled {
      svg {
        fill: white;
      }
    }
  }
  .logo-link {
    &:hover,
    &:active {
      border-bottom: none;
    }
  }
}
</style>
