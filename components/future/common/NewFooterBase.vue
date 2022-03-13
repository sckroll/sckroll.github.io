<template>
  <footer>
    <div class="footer-container">
      <ul class="links">
        <li class="link">
          <SvgBase icon>
            <IconEmail></IconEmail>
          </SvgBase>
        </li>
        <li class="link">
          <SvgBase icon width="28" height="28">
            <IconGitHub></IconGitHub>
          </SvgBase>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} Developed & designed by Sckroll.
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
  padding: 32px;
}
.links {
  list-style: none;
  display: flex;
  gap: 32px;
  padding: 0;

  .link {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  }
}
</style>
