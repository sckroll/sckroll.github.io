<template>
  <section class="tag-list-slider">
    <nuxt-link
      v-for="tag in tags"
      :key="tag[0]"
      :to="`/posts/search?q=${tag[0]}&field=tags`"
      class="tag-item"
    >
      <div class="tag-name">#{{ tag[0] }}</div>
      <div class="tag-count">{{ tag[1] }}</div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
section.tag-list-slider {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
}
.tag-item {
  cursor: pointer;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid $color-grey-700;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 8px;
  color: $color-grey-700;
  font-weight: 500;
  transition: $fade-default;

  &:hover {
    border: 2px solid $color-primary;
    color: $color-primary;
  }
  &:active {
    background-color: $color-primary;
    border: 2px solid $color-primary;
    color: white;
  }
}
.dark-mode {
  .tag-item {
    border: 2px solid $color-grey-400;
    color: $color-grey-400;

    &:hover {
      border: 2px solid $color-secondary;
      color: $color-secondary;
    }
    &:active {
      background-color: $color-secondary;
      border: 2px solid $color-secondary;
      color: black;
    }
  }
}
</style>
