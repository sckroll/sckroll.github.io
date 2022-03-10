<template>
  <header>
    <div class="header-container">
      <div class="header-center">
        <Logo></Logo>
        <NewHeaderMenu></NewHeaderMenu>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;

  .header-container {
    height: $header-height;
    display: flex;
    align-items: flex-end;
    padding: 0 32px 8px;
  }
  .header-center {
    width: 100%;
    height: calc($header-height / 2);
    display: flex;
    justify-content: space-between;
  }
}

@include viewpoint-xl {
  .header-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .header-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .header-container {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .header-container {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .header-container {
    width: 100%;
  }
}
</style>
