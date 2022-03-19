<template>
  <nav class="header-menu">
    <ul class="desktop-menu">
      <li v-for="(item, index) in menu" :key="index">
        <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
      </li>
      <li>
        <ColorModeToggle></ColorModeToggle>
      </li>
    </ul>
    <span class="mobile-menu" @click="openDrawer">
      <fa-icon :icon="['fa', 'bars']" />
    </span>
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
  methods: {
    openDrawer() {
      this.$emit('drawer-open')
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
  font-family: Metropolis, sans-serif;
  font-size: 1.25em;
}
li {
  display: flex;
  align-items: center;

  a {
    padding: 4px 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
    &:active {
      color: $color-primary;
      transition: $fade-default;
    }
  }
}
.nuxt-link-active {
  color: $color-primary;
  border-bottom: 3px solid $color-primary;
  transition: $fade-default;
}
.mobile-menu {
  display: none;
}

@include viewpoint-sm {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
@include viewpoint-xs {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
