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
  display: flex;
  justify-content: center;

  .header-container {
    width: 1200px;
    height: 96px;
    display: flex;
    align-items: flex-end;
    padding: 0 32px 8px;
  }
  .header-center {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
