<template>
  <header :class="{ reversed: (isLanding || isPostPage) && !isError }">
    <div class="header-container">
      <SckrollLogo></SckrollLogo>
      <HeaderMenu :menu="menu" @drawer-open="openDrawer"></HeaderMenu>
    </div>
    <transition name="fade">
      <div v-if="drawer" class="overlay" @click="closeDrawer"></div>
    </transition>
    <transition name="slide-fade">
      <nav-drawer v-if="drawer" :menu="menu" @drawer-close="closeDrawer" />
    </transition>
  </header>
</template>

<script>
export default {
  props: {
    landing: {
      type: Boolean,
      default: false,
    },
  },
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
          name: 'TIL',
          path: '#',
        },
        {
          name: 'Projects',
          path: '/projects',
        },
      ],
      drawer: false,
      scrollThreshold: 86,
    }
  },
  computed: {
    isLanding() {
      return this.$route.path === '/'
    },
    isPostPage() {
      const path = this.$route.path
      return path.match(/\/posts\/\S+/)
    },
    isError() {
      return this.$store.state.isErrorPage
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      const currScrollPos = e.target.documentElement.scrollTop
      if (currScrollPos > this.scrollThreshold) {
        this.$el.classList.add('scrolled')
      } else {
        this.$el.classList.remove('scrolled')
      }
    },
    openDrawer() {
      this.drawer = true
    },
    closeDrawer() {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

header {
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: $header-height-desktop;
  background-color: transparent;
  padding-bottom: 16px;
  font-family: 'NanumSquare', sans-serif;
  color: black;
  transition: $fade-default;

  &.scrolled {
    background-color: rgba(black, 0.5);
    color: white;
    transition: $fade-default;
  }
  &.reversed {
    color: white;
    transition: $fade-default;

    &.scrolled {
      background-color: rgba(black, 0.5);
      transition: $fade-default;
    }
  }
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(black, 0.6);
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
  .overlay {
    display: block;
  }
}
@include viewpoint-xs {
  header {
    height: $header-height-mobile;
  }
  .header-container {
    width: 100%;
  }
  .overlay {
    display: block;
  }
}
</style>
