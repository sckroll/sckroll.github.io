<template>
  <div class="logo-container">
    <div
      class="logo-area"
      :class="{
        'fix-light': hasHeaderImage,
        scrolled: isScrolled,
        'mobile-menu': isMobileMenuVisible,
      }"
    >
      <SvgBase
        class="logo-text"
        :class="{ scrolled: isScrolled, 'mobile-menu': isMobileMenuVisible }"
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
      :class="{ scrolled: isScrolled, 'mobile-menu': isMobileMenuVisible }"
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
    isMobileMenuVisible() {
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
  transition: transform 0.25s $move-smooth;

  &.fix-light {
    svg {
      fill: white;
      transition: $fade-default;
    }

    &.mobile-menu {
      svg {
        fill: black;
      }
    }
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
    transition: opacity 0.2s $move-smooth;

    &.scrolled {
      opacity: 0;
      transition: opacity 0.2s $move-smooth;
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
    &.fix-light {
      &.mobile-menu {
        svg {
          fill: white;
        }
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
