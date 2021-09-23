<template>
  <footer>
    <div class="footer-container">
      <div class="icon-links">
        <a href="https://github.com/sckroll" class="github-link">
          <fa-icon :icon="['fab', 'github']" />
          <span>github.com/sckroll</span>
        </a>
        <a href="mailto://kimsc0714@gmail.com" class="email-link">
          <fa-icon :icon="['far', 'envelope']" />
          <span>kimsc0714@gmail.com</span>
        </a>
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
  height: $footer-height;
  display: flex;
  justify-content: center;
  background-color: $color-grey-5;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
}
.icon-links {
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin-right: 32px;
    padding: 4px 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
    &:active {
      color: $color-primary;
      transition: $fade-default;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  svg {
    font-size: 1.5em;
    margin-right: 8px;
  }
  span {
    font-size: 0.8em;
  }
}
.copyright {
  display: flex;
  align-items: center;
  font-size: 0.8em;
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
  .icon-links {
    a {
      margin-right: 16px;
    }
    svg {
      margin-right: 0;
    }
    span {
      display: none;
    }
  }
}
@include viewpoint-xs {
  .footer-container {
    width: 100vw;
  }
  .icon-links {
    a {
      margin-right: 16px;
    }
    svg {
      margin-right: 0;
    }
    span {
      display: none;
    }
  }
}
</style>
