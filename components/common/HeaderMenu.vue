<template>
  <nav class="header-menu">
    <ul class="desktop-menu display">
      <li v-for="(item, index) in menu" :key="index">
        <TextLink
          :to="item.path"
          :reverse="hasHeaderImage"
          :scroll="hasHeaderImage"
          :fix="hasHeaderImage"
        >
          {{ item.name }}
        </TextLink>
      </li>
    </ul>
    <ColorModeToggle></ColorModeToggle>
    <IconLink
      class="mobile-menu-button"
      :reverse="hasHeaderImage && !isMobileMenuVisible"
      :scroll="hasHeaderImage && !isMobileMenuVisible"
      :fix="hasHeaderImage && !isMobileMenuVisible"
      @click="toggleMenu"
    >
      <SvgBase icon>
        <IconMenu :opened="isMobileMenuVisible"></IconMenu>
      </SvgBase>
    </IconLink>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
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
    toggleMenu() {
      this.$store.commit('SET_MOBILE_MENU_STATE', !this.isMobileMenuVisible)
    },
  },
}
</script>

<style lang="scss" scoped>
nav.header-menu {
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  margin-right: 32px;
  font-size: 1.25em;
  font-weight: 500;
}
li {
  display: flex;
  align-items: center;
}
.nuxt-link-active {
  color: $color-primary;
  border-bottom: 3px solid $color-primary;
}
.mobile-menu-button {
  display: none;
  z-index: 20;
}
.dark-mode {
  .nuxt-link-active {
    color: $color-secondary;
    border-bottom: 3px solid $color-secondary;
  }
}

@include viewpoint-sm {
  .desktop-menu {
    display: none;
  }
  .mobile-menu-button {
    display: flex;
  }
}
@include viewpoint-xs {
  .desktop-menu {
    display: none;
  }
  .mobile-menu-button {
    display: flex;
  }
}
</style>
