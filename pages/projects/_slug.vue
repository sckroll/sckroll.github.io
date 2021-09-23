<template>
  <article class="project-container">
    <header class="project-header">
      <div class="main">
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
      </div>
      <div class="sub">
        <div class="period">개발 기간: {{ project.period }}</div>
        <div class="stacks">
          사용 스택:
          <project-stack
            v-for="(stack, index) in project.stacks"
            :key="index"
            :stack="stack"
          ></project-stack>
        </div>
      </div>
    </header>
    <img
      :src="`/images/projects/${project.image}`"
      :alt="project.name"
      class="project-image"
    />
    <post-content-container :post="project" project></post-content-container>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const project = await $content('projects')
        .where({ slug: params.slug })
        .fetch()

      if (project.length === 0) {
        error({ statusCode: 404 })
      }
      return {
        project: project[0],
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
}
</script>

<style lang="scss">
@include set-viewpoint;

.project-container {
  margin-top: calc(#{$header-height} + 64px);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 32px;
  transition: $fade-default;

  .main {
    h1 {
      font-size: 2.5em;
      margin-bottom: 4px;
    }
    p {
      font-size: 1.25em;
    }
  }
  .sub {
    font-size: 1.1em;
    text-align: right;

    .stacks {
      margin-top: 4px;
    }
  }
}
.project-image {
  width: 100%;
  margin: 32px 0;
  padding: 0 32px;
}

@include viewpoint-xl {
  .project-container {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .project-container {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .project-container {
    width: $breakpoint-md;
  }
  .project-header {
    display: block;

    .sub {
      margin-top: 16px;
      text-align: left;
    }
  }
}
@include viewpoint-sm {
  .project-container {
    width: $breakpoint-sm;
  }
  .project-header {
    display: block;

    .main {
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 1.1em;
      }
    }
    .sub {
      margin-top: 16px;
      font-size: 1em;
      text-align: left;
    }
  }
}
@include viewpoint-xs {
  .project-container {
    width: 100vw;
  }
  .project-header {
    display: block;

    .main {
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 1.1em;
      }
    }
    .sub {
      margin-top: 16px;
      font-size: 1em;
      text-align: left;
    }
  }
}
</style>
