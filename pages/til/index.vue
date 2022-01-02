<template>
  <div class="til-page">
    <h1>Today I Learned</h1>
    <div class="til-content-area">
      <til-list :items="items"></til-list>
      <til-content :items="items"></til-content>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const items = await $content('til', { deep: true }).fetch()

      return {
        items,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
  head() {
    return {
      title: 'TIL',
    }
  },
}
</script>

<style lang="scss">
.til-page {
  margin-top: $header-height;
  padding: 64px 32px;

  h1 {
    font-size: 1.5em;
    margin-bottom: 32px;
  }
}
.til-content-area {
  display: flex;
  align-items: center;
  gap: 32px;
}

@include viewpoint-xl {
  .til-page {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  .til-page {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  .til-page {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  .til-page {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  .til-page {
    width: 100%;
  }
}
</style>
