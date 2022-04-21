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
    <div
      class="mobile-menu icon-link"
      :class="{ 'fix-light': hasHeaderImage, scrolled: isScrolled }"
      @click="openDrawer"
    >
      <SvgBase icon>
        <IconHamburger></IconHamburger>
      </SvgBase>
    </div>
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
    }
    &:active {
      color: $color-primary;
    }
  }
}
.nuxt-link-active {
  color: $color-primary;
  border-bottom: 3px solid $color-primary;
}
.mobile-menu {
  display: none;

  &.fix-light {
    &:hover {
      border: 2px solid rgba(white, 0.5);
    }
    svg {
      fill: white;
    }
  }
  &.scrolled {
    &:hover {
      border: 2px solid rgba(black, 0.5);
    }
    svg {
      fill: black;
    }
  }
}
.dark-mode {
  .nuxt-link-active {
    color: $color-secondary;
    border-bottom: 3px solid $color-secondary;
  }
  li {
    a {
      &:hover {
        border-bottom: 3px solid $color-secondary;
      }
      &:active {
        color: $color-secondary;
      }
    }
  }
  .mobile-menu {
    &.scrolled {
      &:hover {
        border: 2px solid rgba(white, 0.5);
      }
      svg {
        fill: white;
      }
    }
  }
}

@include viewpoint-sm {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
}
@include viewpoint-xs {
  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
