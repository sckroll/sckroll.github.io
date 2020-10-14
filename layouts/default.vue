<template>
  <div class="container">
    <header ref="navbar" class="navbar">
      <div class="header-wrapper">
        <h1 class="logo">Sckroll</h1>
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

a {
  color: inherit;
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
  margin: 0 300px;
}

.header-wrapper .logo {
  float: left;
  font-size: 32px;
  font-weight: 700;
}

.header-wrapper .nav-menu {
  float: right;
  list-style: none;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
}

.nav-menu ul {
  padding: 0;
}

.nav-menu li {
  margin: 0 10px;
  display: inline;
  transition: all 0.2s ease;
}

.nav-menu li:first-child {
  margin-left: 0;
}

.nav-menu li:last-child {
  margin-right: 0;
}

.nav-menu li:hover {
  color: #ffffff;
  transition: all 0.2s ease;
}

.footer-area {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #dddddd;
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
</style>
