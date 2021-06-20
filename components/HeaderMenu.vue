<template>
  <header :class="{ reversed: (isLanding || isPostPage) && !isError }">
    <div class="header-container">
      <span class="logo">
        <nuxt-link to="/">Sckroll</nuxt-link>
      </span>
      <nav-menu :menu="menu" @drawer-open="openDrawer" />
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
import NavDrawer from './NavDrawer'

export default {
  components: {
    NavDrawer,
  },
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
  height: $header-menu-height;
  background-color: transparent;
  padding-bottom: 20px;
  font-family: 'NanumSquare', sans-serif;
  color: #000000;
  transition: all 0.2s ease;

  &.scrolled {
    background-color: #ffffff99;
    color: #000000;
    transition: all 0.2s ease;
  }
  &.reversed {
    color: #ffffff;
    transition: all 0.2s ease;

    &.scrolled {
      background-color: #ffffff99;
      color: #000000;
      transition: all 0.2s ease;
    }
  }
}
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}
.logo {
  font-size: 32px;
  font-weight: 700;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000aa;
}

.fade-enter-active,
.fade-leave-active,
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

@include viewpoint-xl {
  .header-container {
    width: $breakpoint-xl;
  }
  .overlay {
    display: none;
  }
}
@include viewpoint-lg {
  .header-container {
    width: $breakpoint-lg;
  }
  .overlay {
    display: none;
  }
}
@include viewpoint-md {
  .header-container {
    width: $breakpoint-md;
  }
  .overlay {
    display: none;
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
  .header-container {
    width: 100vw;
  }
  .overlay {
    display: block;
  }
}
</style>
