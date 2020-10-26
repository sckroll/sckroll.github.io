<template>
  <footer class="footer-bar">
    <div class="footer-wrapper">
      <div class="icon-links">
        <a href="https://github.com/sckroll">
          <fa-icon :icon="['fab', 'github']" />
        </a>
        <a href="mailto://kimsc0714@gmail.com">
          <fa-icon :icon="['far', 'envelope']" />
        </a>
      </div>
      <div class="copyright">ⓒ{{ new Date().getFullYear() }} Sckroll.</div>
    </div>
  </footer>
</template>

<style>
.footer-bar {
  text-align: center;
  background-color: #dddddd;
}

.footer-wrapper {
  display: inline-block;
  margin: 30px 0;
}

.icon-links {
  font-size: 24px;
  margin-bottom: 10px;
}

.copyright {
  font-size: 20px;
  font-family: 'NanumSquare', sans-serif;
}
</style>
