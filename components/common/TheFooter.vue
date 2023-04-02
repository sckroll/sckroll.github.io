<template>
  <footer>
    <div class="footer-container">
      <div class="links">
        <IconBase>
          <IconEmail />
        </IconBase>
        <IconBase>
          <IconGitHub />
        </IconBase>
      </div>
      <p class="copyright">
        &copy; {{ new Date().getFullYear() }} Designed & developed by Sckroll.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
}
.links {
  display: flex;
  gap: 1rem;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

@include viewport-xl {
  .footer-container {
    width: $breakpoint-xl;
  }
}
</style>