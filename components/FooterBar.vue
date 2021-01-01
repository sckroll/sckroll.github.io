<template>
  <footer class="footer-bar">
    <div class="footer-wrapper">
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
        <br />ⓒ {{ new Date().getFullYear() }} Sckroll. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style>
.footer-bar {
  display: flex;
  justify-content: center;
  background-color: #dddddd;
}

.footer-wrapper {
  display: flex;
  justify-content: space-between;
  width: var(--container-xl);
  padding: 20px 30px;
}

.icon-links,
.copyright {
  line-height: 180%;
}

.github-link,
.email-link {
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.github-link:hover,
.email-link:hover {
  color: #888888;
  transition: all 0.2s ease;
}

.github-icon,
.email-icon {
  font-size: 24px;
  margin-right: 5px;
}

@media screen and (max-width: 1200px) {
  .footer-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .footer-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .footer-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
