<template>
  <div v-if="hasHeaderImage" class="header-image-container">
    <HeaderIntro></HeaderIntro>
  </div>
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
  background: linear-gradient(to right, rgb(7, 0, 112), rgb(0, 0, 27));
}
</style>
