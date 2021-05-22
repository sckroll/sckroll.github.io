<template>
  <div class="container">
    <header-menu />
    <main class="main-container">
      <Nuxt />
    </main>
    <footer-bar />
  </div>
</template>

<style lang="scss">
.container {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-container {
  margin: $header-menu-height + 50px 0 50px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
