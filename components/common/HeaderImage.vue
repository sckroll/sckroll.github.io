<template>
  <div v-if="hasHeaderImage" class="header-image-container"></div>
</template>

<script>
export default {
  computed: {
    hasHeaderImage() {
      return this.$store.state.hasHeaderImage
    },
  },
}
</script>

<style lang="scss" scoped>
.header-image-container {
  width: 100%;
  height: 70vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(to right, red, blue);
}
</style>
