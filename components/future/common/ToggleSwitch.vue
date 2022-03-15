<template>
  <div class="toggle-switch">
    <div class="knob"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.toggle-switch {
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  border: 2px solid white;
  border-radius: 12px;
  padding: 2px;
}
.knob {
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 8px;
}
</style>
