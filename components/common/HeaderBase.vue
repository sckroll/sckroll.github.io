<template>
  <header :class="{ reversed: isPostPage && !isError }">
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
          name: 'Projects',
          path: '/projects',
        },
      ],
      drawer: false,
      scrollThreshold: 86,
    }
  },
  computed: {
    isPostPage() {
      const path = this.$route.path
      return (
        path.includes('/posts/') &&
        !path.includes('/page/') &&
        !path.includes('/search')
      )
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
header {
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: $header-height;
  background-color: white;
  color: black;
  padding-bottom: 16px;
  font-family: 'NanumSquare', sans-serif;
  transition: $fade-default;

  &.scrolled {
    background-color: white;
    box-shadow: 0 2px 4px 2px rgba(black, 0.2);
    transition: $fade-default;
  }
  &.reversed {
    background-color: transparent;
    color: white;
    transition: $fade-default;

    &.scrolled {
      background-color: white;
      color: black;
      transition: $fade-default;
    }
  }
}
.dark-mode header {
  background-color: $color-grey-0;
  color: white;

  &.scrolled {
    background-color: $color-grey-1;
  }
  &.reversed {
    background-color: transparent;

    &.scrolled {
      background-color: $color-grey-1;
      color: white;
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
  .header-container {
    width: 100%;
  }
  .overlay {
    display: block;
  }
}
</style>
