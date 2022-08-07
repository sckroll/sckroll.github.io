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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px 0 40px;
}
.links {
  display: flex;
  padding: 0;
}

@include viewpoint-xs {
  .footer-container {
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
