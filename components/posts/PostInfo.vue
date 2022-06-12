<template>
  <section class="post-info">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <div class="info-footer" :class="{ project: isProject }">
      <div v-if="post.tags" class="tags">
        <span v-for="tag in post.tags.split(', ')" :key="tag" class="tag">
          #{{ tag }}
        </span>
      </div>

      <div v-if="post.period" class="period">개발 기간: {{ post.period }}</div>
      <div v-else class="posted-date">
        <span class="created-date">{{ formatDate(post.createdAt) }}</span>
        <span
          v-if="diffDate(post.createdAt, post.updatedAt) > 0"
          class="updated-date"
        >
          (수정: {{ formatDate(post.updatedAt) }})
        </span>
      </div>

      <div v-if="post.stacks" class="stacks">
        사용 스택:
        <ProjectStack
          v-for="(stack, index) in post.stacks"
          :key="index"
          :stack="stack"
        ></ProjectStack>
      </div>
    </div>
  </section>
</template>

<script>
import { formatDate, diffDate } from '@/utils/handleDate'

export default {
  computed: {
    post() {
      return this.$store.state.post
    },
    isProject() {
      return !!this.$store.state.post.stacks
    },
  },
  methods: {
    formatDate,
    diffDate,
  },
}
</script>

<style lang="scss" scoped>
$background-height: calc(#{$header-image-height} - #{$header-height});

.post-info {
  height: $background-height;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 48px 32px;
  gap: 16px;
}
.info-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(white, 0.5);
}
.tags {
  display: flex;
  gap: 16px;
}
.stacks {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
}

@include viewpoint-xl {
  .post-info {
    width: $breakpoint-xl;
  }
  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.5em;
  }
  .info-footer {
    font-size: 1em;
  }
}
@include viewpoint-lg {
  .post-info {
    width: $breakpoint-lg;
  }
  h1 {
    font-size: 2.25em;
  }
  p {
    font-size: 1.25em;
  }
  .info-footer {
    font-size: 1em;
  }
}
@include viewpoint-md {
  .post-info {
    width: $breakpoint-md;
  }
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 1.25em;
  }
  .info-footer {
    font-size: 0.9em;
  }
}
@include viewpoint-sm {
  .post-info {
    width: $breakpoint-sm;
    gap: 8px;
  }
  h1 {
    font-size: 1.75em;
  }
  p {
    font-size: 1.1em;
  }
  .info-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.8em;
  }
}
@include viewpoint-xs {
  .post-info {
    width: 100vw;
    gap: 8px;
  }
  h1 {
    font-size: 1.75em;
  }
  p {
    font-size: 1.1em;
  }
  .info-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.8em;

    .posted-date {
      float: right;
    }
  }
}
</style>
