<template>
  <div class="container">
    <HeaderBase></HeaderBase>
    <main class="main-container">
      <Nuxt />
    </main>
    <FooterBase></FooterBase>
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
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
