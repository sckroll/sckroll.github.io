<template>
  <nav class="nav-menu">
    <div class="links">
      <nuxt-link v-for="(item, index) in menu" :key="index" :to="item.path">
        {{ item.name }}
      </nuxt-link>
      <dark-mode-toggle></dark-mode-toggle>
    </div>
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
.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  font-size: 1.25em;
  font-weight: 600;
}
.links {
  display: flex;
  padding: 0;
}
a {
  margin-right: 32px;
  display: inline;
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
.nuxt-link-active {
  color: $color-primary;
  border-bottom: 3px solid $color-primary;
  transition: $fade-default;
}
.scrolled {
  .nuxt-link-active {
    color: $color-primary;
    transition: $fade-default;
  }
}
.mobile-menu {
  display: none;
}

@include viewpoint-sm {
  .links {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
@include viewpoint-xs {
  .links {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
