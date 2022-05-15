<template>
  <transition name="fade">
    <div v-if="value" class="dropdown-container">
      <div class="dropdown-wrapper click-block">
        <TextLink
          v-for="(item, index) in items"
          :key="index"
          :selected="selected === item"
          @click="selectItem(item)"
        >
          {{ item }}
        </TextLink>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          window.addEventListener('click', this.onClick)
        } else {
          window.removeEventListener('click', this.onClick)
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.onClick)
  },
  methods: {
    onClick({ target }) {
      if (target.classList.contains('click-block')) return
      this.hideDropdown()
    },
    hideDropdown() {
      this.$emit('input', false)
    },
    selectItem(item) {
      this.$emit('item-select', item)
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-container {
  z-index: 1;
  position: relative;
}
.dropdown-wrapper {
  position: absolute;
  top: 32px;
  right: 0;
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background-color: rgba(white, 0.7);
  backdrop-filter: blur(4px);
}
.dark-mode .dropdown-wrapper {
  background-color: rgba(black, 0.7);
}
</style>
