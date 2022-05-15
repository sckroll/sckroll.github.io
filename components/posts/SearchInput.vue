<template>
  <input
    v-model="query"
    type="search"
    autocomplete="off"
    :placeholder="placeholder"
    @keyup.enter="onEnter"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      query: '',
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.query = this.value
      },
    },
    query: {
      immediate: true,
      handler(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    onEnter() {
      this.$emit('enter')
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  height: 40px;
  border: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid black;
  background-color: transparent;
  padding: 0;
  font-size: 1em;
  color: black;
  caret-color: black;
  transition: $fade-default;

  &:hover {
    border-bottom: 2px solid $color-primary;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid $color-primary;
  }
}
.dark-mode input {
  border-bottom: 2px solid white;
  color: white;
  caret-color: white;

  &:hover {
    border-bottom: 2px solid $color-secondary;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid $color-secondary;
  }
}
</style>
