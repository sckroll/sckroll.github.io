<template>
  <nuxt-link :to="`/projects/${project.slug}`">
    <article>
      <img :src="`/images/projects/${project.image}`" :alt="project.name" />
      <div class="info">
        <h2 class="name">{{ project.name }}</h2>
        <p class="description">{{ project.description }}</p>
        <div class="stacks">
          사용 스택:
          <span
            v-for="(stack, index) in project.stacks"
            :key="index"
            class="stack"
          >
            {{ stack }}
          </span>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  box-shadow: 0 1px 2px 1px rgba(black, 0.2);
  transition: $fade-default;

  &:hover {
    box-shadow: 0 2px 8px 4px rgba(black, 0.15);
    transform: translateY(-2px);
    transition: $fade-default;
  }
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  .stack {
    &::after {
      margin-left: -4px;
      content: ',';
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
}
</style>
