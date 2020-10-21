<template>
  <div class="container">
    <header ref="navbar" class="navbar">
      <header-menu />
    </header>
    <Nuxt />
    <footer class="footer-area">
      <div class="footer-wrapper">
        <div class="icon-links">
          <a href="https://github.com/sckroll">
            <fa-icon :icon="['fab', 'github']" />
          </a>
          <a href="mailto://kimsc0714@gmail.com">
            <fa-icon :icon="['far', 'envelope']" />
          </a>
        </div>
        <div class="author-info">Designed by Sckroll</div>
      </div>
    </footer>
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --container-xl: 1200px;
  --container-lg: 992px;
  --container-md: 768px;
  --container-sm: 576px;
  --post-preview-width-xl: 275px;
  --post-preview-width-lg: 300px;
  --post-preview-width-md: 345px;
}

body {
  background-color: #eeeeee;
}

h1 {
  font-family: 'NanumSquare', sans-serif;
  font-weight: 700;
  font-size: 40px;
}

h2 {
  font-family: 'NanumSquare', sans-serif;
  font-weight: 500;
  font-size: 32px;
}

a {
  color: inherit;
  text-decoration: none;
}

.navbar {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  width: 100%;
  top: -120px;
  background-color: #eeeeee66;
  padding: 60px 0 20px 0;
  font-family: 'NanumSquare', sans-serif;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
}

.content {
  margin: 50px 0;
  display: flex;
  justify-content: center;
}

.footer-area {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dddddd;
}

.footer-wrapper {
  display: inline-block;
  margin: 50px 0;
}

.icon-links {
  font-size: 24px;
  margin-bottom: 10px;
}

.author-info {
  font-size: 20px;
  font-family: 'NanumSquare', sans-serif;
}

.component-label {
  margin-bottom: 20px;
}
</style>
