<template>
  <span class="darkmode-toggle">
    <fa-icon :icon="['far', 'sun']" />
    <div
      class="toggle-switch"
      :class="{ dark: isDarkMode }"
      @click="toggleColorMode"
    >
      <div class="knob" :class="{ dark: isDarkMode }"></div>
    </div>
    <fa-icon :icon="['far', 'moon']" />
  </span>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode
    },
  },
  methods: {
    toggleColorMode() {
      this.$store.commit('SET_DARK_MODE', !this.isDarkMode)
    },
  },
}
</script>

<style lang="scss" scoped>
.darkmode-toggle {
  display: flex;
  align-items: center;
}
.toggle-switch {
  cursor: pointer;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  margin: 0 8px;
  padding: 2px;
  background-color: $color-grey-5;

  &.dark {
    background-color: $color-primary;
    transition: $fade-default;
  }
  .knob {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: white;
    transform: translateX(0);
    transition: $fade-default;

    &.dark {
      transform: translateX(24px);
      transition: $fade-default;
    }
  }
}
</style>
