<template>
  <footer>
    <div class="footer-container">
      <div class="links">
        <a href="mailto://kimsc0714@gmail.com" class="icon-link">
          <SvgBase icon>
            <IconEmail></IconEmail>
          </SvgBase>
        </a>
        <a href="https://github.com/sckroll" class="icon-link">
          <SvgBase icon width="28" height="28">
            <IconGitHub></IconGitHub>
          </SvgBase>
        </a>
      </div>
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} Designed & developed by Sckroll.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 32px 24px;
}
.links {
  display: flex;
  padding: 0;
}

@include viewpoint-xl {
  .footer-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .footer-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .footer-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .footer-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .footer-container {
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }
  .copyright {
    font-size: 0.8em;
    text-align: center;
  }
}
</style>
