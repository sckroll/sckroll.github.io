<template>
  <section class="post-info">
    <div class="info-main">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <div class="info-sub">
      <div>
        <div v-for="tag in post.tags.split(', ')" :key="tag" class="tags">
          <span class="tag">#{{ tag }}</span>
        </div>
      </div>
      <div class="posted-date">
        <span class="created-date">{{ formatDate(post.createdAt) }}</span>
        <span
          v-if="diffDate(post.createdAt, post.updatedAt) > 0"
          class="updated-date"
        >
          (수정: {{ formatDate(post.updatedAt) }})
        </span>
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
  padding: 32px;

  .info-main {
    p {
      margin-top: 8px;
    }
  }
  .info-sub {
    display: flex;
    justify-content: space-between;
    color: rgba(white, 0.5);
    margin: 8px 0;
  }
}
.tags {
  display: inline;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
}

@include viewpoint-xl {
  .post-info {
    width: $breakpoint-xl;
  }
  .info-main {
    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 1.5em;
    }
  }
  .info-sub {
    font-size: 1em;
  }
}
@include viewpoint-lg {
  .post-info {
    width: $breakpoint-lg;
  }
  .info-main {
    h1 {
      font-size: 2.25em;
    }
    p {
      font-size: 1.25em;
    }
  }
  .info-sub {
    font-size: 1em;
  }
}
@include viewpoint-md {
  .post-info {
    width: $breakpoint-md;
  }
  .info-main {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.25em;
    }
  }
  .info-sub {
    font-size: 0.9em;
  }
}
@include viewpoint-sm {
  .post-info {
    width: $breakpoint-sm;
  }
  .info-main {
    h1 {
      font-size: 1.75em;
    }
    p {
      font-size: 1.1em;
    }
  }
  .info-sub {
    font-size: 0.8em;
  }
}
@include viewpoint-xs {
  .post-info {
    width: 100vw;

    .info-sub {
      display: block;
    }
  }
  .info-main {
    h1 {
      font-size: 1.75em;
    }
    p {
      font-size: 1.1em;
    }
  }
  .info-sub {
    font-size: 0.8em;

    .posted-date {
      float: right;
    }
  }
}
</style>
