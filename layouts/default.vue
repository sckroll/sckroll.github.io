<template>
  <div class="container">
    <header ref="navbar" class="navbar">
      <div class="header-wrapper">
        <span class="logo">Sckroll</span>
        <nav class="nav-menu">
          <ul>
            <li><a>About</a></li>
            <li><a>Posts</a></li>
            <li><a>Projects</a></li>
            <li><fa-icon :icon="['far', 'moon']" /></li>
          </ul>
        </nav>
      </div>
    </header>
    <Nuxt />
    <footer>
      <div class="copyright">ⓒ{{ new Date().getFullYear() }} Sckroll.</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollThreshold: 120,
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

.navbar {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: -120px;
  background-color: #eeeeee66;
  padding: 60px 0 20px 0;
  font-family: 'NanumSquare', sans-serif;
  transition: all 0.5s cubic-bezier(0.11, 0.66, 0.32, 0.97);
  backdrop-filter: blur(3px);
}

.header-wrapper {
  overflow: hidden;
  margin-left: 300px;
  margin-right: 300px;
}

.header-wrapper .logo {
  float: left;
  font-size: 32px;
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
}

.header-wrapper .nav-menu {
  float: right;
  list-style: none;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
}

.nav-menu li {
  margin-left: 10px;
  margin-right: 10px;
  display: inline;
}

.nav-menu li a:hover {
  font-weight: 700;
}
</style>
