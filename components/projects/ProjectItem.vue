<template>
  <nuxt-link :to="`/projects/${project.slug}`">
    <article class="project-item">
      <div class="project-thumbnail" :style="`background-image: ${thumbnail};`">
        <div class="thumbnail-overlay"></div>
      </div>
      <div class="project-info-container">
        <div class="project-info-inner">
          <div class="main-info">
            <h1 class="title">{{ project.title }}</h1>
            <h2 class="description">{{ project.description }}</h2>
          </div>
          <div class="stacks-container">
            <h2>기술 스택</h2>
            <div class="stacks">
              <ProjectStack
                v-for="(stack, index) in project.stacks"
                :key="index"
                :stack="stack"
              ></ProjectStack>
            </div>
          </div>
        </div>
        <div class="bottom-border"></div>
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
  computed: {
    thumbnail() {
      return `url(/images/projects/${this.project.image})`
    },
  },
}
</script>

<style lang="scss" scoped>
article.project-item {
  height: 100%;
  display: flex;
  background-color: white;
  transition: $fade-default;

  &:hover {
    background-color: $color-grey-100;

    .title {
      color: $color-primary;
    }
    .bottom-border {
      width: 100%;
    }
  }
}
.project-thumbnail {
  aspect-ratio: 16 / 9;
  flex: 1;
  background-position: center;
}
.thumbnail-overlay {
  height: 100%;
  background-color: rgba(black, 0.1);
}
.project-info-container {
  flex: 1;
}
.project-info-inner {
  height: calc(100% - 8px);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1.4em;
  transition: $fade-default;
}
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: $color-grey-600;
  font-size: 1.1em;
}
.stacks-container {
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1em;
    font-weight: 400;
  }
}
.stacks {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.bottom-border {
  width: 0;
  height: 8px;
  background-color: $color-primary;
  transition: width 0.2s $move-smooth;
}

.dark-mode {
  article.project-item {
    background-color: $color-grey-800;

    &:hover {
      background-color: $color-grey-700;

      .title {
        color: white;
      }
    }
  }
  .description {
    color: $color-grey-400;
  }
}

@include viewpoint-lg {
  .project-info-container {
  }
}
@include viewpoint-md {
  .project-info-container {
    padding: 24px;

    .main-info {
      gap: 4px;
    }
    .title {
      font-size: 1.2em;
    }
    .description {
      font-size: 1em;
    }
  }
}
@include viewpoint-sm {
  .project-info-container {
    gap: 8px;

    .title {
      padding-bottom: 2px;
      font-size: 1.25em;
    }
    .description {
      font-size: 1em;
    }
  }
}
@include viewpoint-xs {
  .project-info-container {
    gap: 8px;

    .title {
      padding-bottom: 2px;
      font-size: 1.25em;
    }
    .description {
      font-size: 1em;
    }
  }
}
</style>
