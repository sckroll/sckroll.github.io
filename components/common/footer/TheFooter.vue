<template>
  <footer>
    <div class="footer-container">
      <FooterLinks />
      <TheCopyright />
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
  padding: 2rem;
}

@include viewport-xl {
  .footer-container {
    width: $breakpoint-xl;
  }
}
</style>