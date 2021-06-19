<template>
  <footer>
    <div class="footer-container">
      <div class="icon-links">
        <div class="github-area">
          <a href="https://github.com/sckroll" class="github-link">
            <fa-icon :icon="['fab', 'github']" class="github-icon" />
            <span>github.com/sckroll</span>
          </a>
        </div>
        <div class="email-area">
          <a href="mailto://kimsc0714@gmail.com" class="email-link">
            <fa-icon :icon="['far', 'envelope']" class="email-icon" />
            <span>kimsc0714@gmail.com</span>
          </a>
        </div>
      </div>
      <div class="copyright">
        ⓒ {{ new Date().getFullYear() }} Sckroll. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@include set-viewpoint;

footer {
  display: flex;
  justify-content: center;
  background-color: #dddddd;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  line-height: 180%;
}
.github-link,
.email-link {
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    color: #888888;
    transition: all 0.2s ease;
  }
}
.github-icon,
.email-icon {
  font-size: 24px;
  margin-right: 5px;
}
.copyright {
  display: flex;
  align-items: flex-end;
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
    /* width: $breakpoint-sm; */
    width: 100%;
  }
  .icon-links {
    display: flex;
  }
  .email-area {
    margin-left: 10px;
  }
  .github-icon,
  .email-icon {
    margin-right: 0;
  }
  .github-link > span,
  .email-link > span {
    display: none;
  }
}
</style>
