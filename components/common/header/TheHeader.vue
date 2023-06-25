<script setup lang="ts">
import IconLogo from '@/assets/images/icons/IconLogo.svg'
</script>

<template>
  <header>
    <div class="header-container">
      <IconLogo />
      <TheMenuNav />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
}
.header-container {
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@include viewport-xl {
  .header-container {
    width: $breakpoint-xl;
  }
}
</style>