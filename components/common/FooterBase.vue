<template>
  <footer>
    <div class="footer-container">
      <div class="links">
        <IconLink to="mailto://kimsc0714@gmail.com">
          <SvgBase icon>
            <IconEmail></IconEmail>
          </SvgBase>
        </IconLink>
        <IconLink to="https://github.com/sckroll">
          <SvgBase icon width="28" height="28">
            <IconGitHub></IconGitHub>
          </SvgBase>
        </IconLink>
      </div>
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} Designed & developed by Sckroll.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: $footer-height;
  display: flex;
  justify-content: center;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 0 24px;
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
    justify-content: flex-start;
    gap: 8px;
  }
  .copyright {
    font-size: 0.8em;
    text-align: center;
  }
}
</style>
