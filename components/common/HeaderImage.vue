<template>
  <div v-if="hasHeaderImage" class="header-image-container">
    <div
      v-if="headerImage"
      class="post-background-image"
      :style="`background: ${headerImage};`"
    ></div>
    <HeaderIntro v-else></HeaderIntro>
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
  height: 70vh;
  position: absolute;
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, rgb(7, 0, 112), rgb(0, 0, 27));
}
.post-background-image {
  width: inherit;
  height: inherit;
  filter: brightness(50%);
}
</style>
