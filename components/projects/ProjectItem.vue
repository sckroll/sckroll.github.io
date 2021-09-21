<template>
  <nuxt-link :to="`/projects/${project.slug}`">
    <article>
      <img :src="`/images/projects/${project.image}`" :alt="project.name" />
      <div class="info">
        <h2 class="name">{{ project.name }}</h2>
        <p class="description">{{ project.description }}</p>
        <div class="stacks">
          사용 스택:
          <project-stack
            v-for="(stack, index) in project.stacks"
            :key="index"
            :stack="stack"
          ></project-stack>
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
@include set-viewpoint;

article {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
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
    flex: 3;
    object-fit: cover;
  }
  .info {
    flex: 2;
  }
  h2 {
    font-size: 1.75em;
  }
  .stacks {
    margin: 16px 0 8px;
  }
}

@include viewpoint-md {
  article {
    h2 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
    .stacks {
      font-size: 0.9em;
    }
  }
}
@include viewpoint-xs {
  article {
    h2 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
    .stacks {
      font-size: 0.9em;
    }
  }
}
</style>
