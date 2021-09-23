<template>
  <transition name="fade">
    <div v-if="value" class="dropdown-container">
      <div class="dropdown-wrapper click-block">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="item"
          :class="{ selected: selected === item }"
          @click="selectItem(item)"
        >
          {{ item }}
        </div>
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
          window.addEventListener('click', this.clickListener)
        } else {
          window.removeEventListener('click', this.clickListener)
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickListener)
  },
  methods: {
    clickListener({ target }) {
      if (target.classList.contains('click-block')) return
      this.hideDropdown()
    },
    hideDropdown() {
      this.$emit('input', false)
    },
    selectItem(item) {
      this.$emit('selected-item', item)
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
  top: 24px;
  left: -32px;
  width: 64px;
  padding: 16px;
  background-color: var(--color-sheet);
  box-shadow: 0 2px 4px 2px rgba(black, 0.2);

  .item {
    cursor: pointer;
    margin-bottom: 8px;
    padding: 2px 0;
    border-bottom: 3px solid transparent;
    transition: $fade-default;

    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      border-bottom: 3px solid $color-grey-4;
      transition: $fade-default;
    }
    &.selected {
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
  }
}
</style>
