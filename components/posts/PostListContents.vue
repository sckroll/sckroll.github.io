<template>
  <section class="post-list-contents" :class="{ projects }">
    <template v-if="posts">
      <PostItem v-for="post in posts" :key="post.slug" :post="post"></PostItem>
    </template>
    <template v-else-if="projects">
      <ProjectItem
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      ></ProjectItem>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: [Array, null],
      default: null,
    },
    projects: {
      type: [Array, null],
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
section.post-list-contents {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);

  &.projects {
    grid-template-columns: 1fr;
  }
  a {
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }
}

@include viewpoint-md {
  section.post-list-contents {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@include viewpoint-sm {
  section.post-list-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}
@include viewpoint-xs {
  section.post-list-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
