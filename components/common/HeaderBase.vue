<template>
  <header
    :class="{
      'fix-light': hasHeaderImage,
      scrolled: isScrolled,
      'blur-disabled': isMobileMenuVisible,
    }"
  >
    <div class="header-container">
      <div class="header-center">
        <Logo></Logo>
        <HeaderMenu :menu="menu"></HeaderMenu>
      </div>
    </div>
    <transition name="fade">
      <MobileMenu v-if="isMobileMenuVisible" :menu="menu"></MobileMenu>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Posts',
          path: '/posts',
        },
        {
          name: 'Projects',
          path: '/projects',
        },
      ],
      drawer: false,
      scrollThreshold: 86,
      scrollPos: 0,
    }
  },
  computed: {
    hasHeaderImage() {
      const state = ['index', 'posts/slug'].includes(this.$route.name)
      this.$store.commit('SET_HEADER_IMAGE_STATE', state)
      return state
    },
    isScrolled() {
      const state = this.scrollPos > this.scrollThreshold
      this.$store.commit('SET_SCROLL_STATE', state)
      return state
    },
    isError() {
      return this.$store.state.isErrorPage
    },
    isMobileMenuVisible() {
      return this.$store.state.isMobileMenuOpened
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.scrollPos = document.documentElement.scrollTop
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.scrollPos = e.target.documentElement.scrollTop
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  transition: $fade-default;

  .header-container {
    height: $header-height;
    display: flex;
    align-items: flex-end;
    padding: 0 24px 8px 32px;
  }
  .header-center {
    width: 100%;
    height: calc($header-height / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.fix-light {
    color: white;
  }
  &.scrolled {
    background-color: rgba(white, 0.7);
    color: black;
    backdrop-filter: blur(4px);

    &.blur-disabled {
      backdrop-filter: none;
    }
  }
}
.dark-mode {
  header.scrolled {
    background-color: rgba(black, 0.7);
    color: white;
  }
}

@include viewpoint-xl {
  .header-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .header-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .header-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .header-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .header-container {
    width: 100%;
  }
}
</style>
