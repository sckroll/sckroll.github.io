<template>
  <section class="project-list">
    <h1><slot></slot></h1>
    <div class="project-item-wrapper">
      <project-item
        v-for="project in projects"
        :key="project.name"
        :project="project"
      ></project-item>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.project-list {
  padding: 64px 32px;

  h1 {
    margin-bottom: 32px;
  }
  .project-item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@include viewpoint-xl {
  .project-list {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .project-list {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .project-list {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .project-list {
    width: $breakpoint-sm;
    grid-template-columns: repeat(1, 1fr);
  }
}
@include viewpoint-xs {
  .project-list {
    width: 100vw;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
