<template>
  <div v-if="hasHeaderImage" class="header-image-container">
    <div
      v-if="headerImage"
      class="post-background-image"
      :style="`background-image: ${headerImage};`"
    ></div>
    <HeaderIntro v-else></HeaderIntro>
    <div class="header-image-overlay"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['hasHeaderImage', 'headerImage']),
  },
}
</script>

<style lang="scss" scoped>
.header-image-container {
  width: 100%;
  height: $header-image-height;
  position: absolute;
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, rgb(7, 0, 112), rgb(0, 0, 27));
}
.post-background-image {
  width: inherit;
  height: inherit;
  background-position: center;
  background-size: cover;
}
.header-image-overlay {
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}
</style>
