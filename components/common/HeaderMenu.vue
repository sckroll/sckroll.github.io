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
      :reverse="hasHeaderImage && !isMobileMenuOpened"
      :scroll="hasHeaderImage && !isMobileMenuOpened"
      :fix="hasHeaderImage && !isMobileMenuOpened"
      @click="toggleMenu"
    >
      <SvgBase icon>
        <IconMenu :opened="isMobileMenuOpened"></IconMenu>
      </SvgBase>
    </IconLink>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'isMobile',
      'hasHeaderImage',
      'isScrolled',
      'isMobileMenuOpened',
    ]),
  },
  methods: {
    toggleMenu() {
      this.$store.commit('SET_MOBILE_MENU_STATE', !this.isMobileMenuOpened)
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
.mobile-menu-button {
  z-index: 20;
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
