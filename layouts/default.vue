<template>
  <div class="container">
    <div class="container-header">
      <header ref="navbar" class="navbar">
        <header-menu />
      </header>
      <main class="main-container">
        <Nuxt />
      </main>
    </div>
    <footer-bar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollThreshold: 86,
    }
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
        this.$refs.navbar.style.top = '0'
      } else {
        this.$refs.navbar.style.top = '-120px'
      }
    },
  },
}
</script>
