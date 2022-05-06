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
      v-if="isMobile"
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
import { breakpointMd } from '@/assets/scss/main.scss'

export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMobile: false,
    }
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
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    toggleMenu() {
      this.$store.commit('SET_MOBILE_MENU_STATE', !this.isMobileMenuVisible)
    },
    onResize() {
      if (window.innerWidth <= parseInt(breakpointMd.replace('px', ''))) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
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
}
@include viewpoint-xs {
  .desktop-menu {
    display: none;
  }
}
</style>
