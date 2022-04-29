<template>
  <nav class="header-menu">
    <ul class="desktop-menu display">
      <li v-for="(item, index) in menu" :key="index">
        <nuxt-link
          :to="item.path"
          :class="{
            'fix-light': hasHeaderImage,
            scrolled: isScrolled,
          }"
          >{{ item.name }}</nuxt-link
        >
      </li>
    </ul>
    <ColorModeToggle></ColorModeToggle>
    <div
      class="mobile-menu-button icon-link"
      :class="{
        'fix-light': hasHeaderImage,
        scrolled: isScrolled,
        'mobile-menu': isMobileMenuVisible,
      }"
      @click="toggleMenu"
    >
      <SvgBase icon>
        <IconMenu :opened="isMobileMenuVisible"></IconMenu>
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
    &.fix-light {
      &:hover {
        border-bottom: 3px solid $color-secondary;
      }
      &:active {
        color: $color-secondary;
      }
      &.scrolled {
        &:hover {
          border-bottom: 3px solid $color-primary;
        }
        &:active {
          color: $color-primary;
        }
      }
    }
  }
}
.nuxt-link-active {
  color: $color-primary;
  border-bottom: 3px solid $color-primary;
}
.mobile-menu-button {
  display: none;
  z-index: 20;

  &.fix-light {
    svg {
      fill: white;
    }
    &:hover {
      border: 2px solid rgba(white, 0.5);
    }
    &:active {
      border: 2px solid $color-secondary;

      svg {
        fill: $color-secondary;
      }
    }
    &.mobile-menu {
      svg {
        fill: black;
      }
      &:hover {
        border: 2px solid rgba(black, 0.5);
      }
      &:active {
        border: 2px solid $color-primary;

        svg {
          fill: $color-primary;
        }
      }
    }
  }
  &.scrolled {
    svg {
      fill: black;
    }
    &:hover {
      border: 2px solid rgba(black, 0.5);
    }
    &:active {
      border: 2px solid $color-primary;

      svg {
        fill: $color-primary;
      }
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
      &.scrolled {
        &:hover {
          border-bottom: 3px solid $color-secondary;
        }
        &:active {
          color: $color-secondary;
        }
      }
    }
  }
  .mobile-menu-button {
    &.scrolled {
      svg {
        fill: white;
      }
      &:hover {
        border: 2px solid rgba(white, 0.5);
      }
      &:active {
        border: 2px solid $color-secondary;

        svg {
          fill: $color-secondary;
        }
      }
    }
    &.fix-light {
      &.mobile-menu {
        svg {
          fill: white;
        }
        &:hover {
          border: 2px solid rgba(white, 0.5);
        }
        &:active {
          border: 2px solid $color-secondary;

          svg {
            fill: $color-secondary;
          }
        }
      }
    }
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
