<template>
  <header>
    <div class="header-container">
      <span class="logo">
        <nuxt-link :to="{ name: 'index' }">Sckroll</nuxt-link>
      </span>
      <nav-menu />
    </div>
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
      scrollThreshold: 86,
    }
  },
  // mounted() {
  //   window.addEventListener('scroll', this.onScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.onScroll)
  // },
  // methods: {
  //   onScroll(e) {
  //     const currScrollPos = e.target.documentElement.scrollTop
  //     if (currScrollPos > this.scrollThreshold) {
  //       this.$el.style.top = '0'
  //     } else {
  //       this.$el.style.top = '-120px'
  //     }
  //   },
  // },
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
  background-color: #eeeeee66;
  padding-bottom: 20px;
  font-family: 'NanumSquare', sans-serif;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
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
</style>
