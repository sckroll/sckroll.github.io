<template>
  <section class="error-content">
    <div class="error-code">
      <h1 v-if="error.statusCode">{{ error.statusCode }}</h1>
    </div>
    <div class="error-message">
      <h2 v-if="error.statusCode === 404">
        {{ message.notFound }}
      </h2>
      <h2 v-else>{{ message.other }}</h2>
    </div>
    <nuxt-link to="/" class="homepage-link">홈으로</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      message: {
        notFound: '요청하신 페이지가 없습니다.',
        other: '페이지를 불러오는 중에 에러가 발생했습니다.',
      },
    }
  },
  created() {
    this.$store.commit('SET_ERROR_PAGE', true)
  },
}
</script>

<style lang="scss">
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: $header-height;
  height: calc(100vh - #{$header-height} - #{$footer-height});

  h1 {
    font-size: 4em;
    font-weight: 500;
  }
  .error-message {
    margin: 8px 0;
  }
}
.homepage-link {
  font-size: 1.1em;
  padding: 4px 0;
  border-bottom: 3px solid transparent;
  transition: $fade-default;

  &:hover {
    border-bottom: 3px solid $color-primary;
    transition: $fade-default;
  }
  &:active {
    color: $color-primary;
    transition: $fade-default;
  }
}

@include viewpoint-xs {
  .error-content {
    h1 {
      font-size: 3em;
    }
    .error-message {
      font-size: 0.9em;
    }
  }
  .homepage-link {
    font-size: 1em;
  }
}
</style>
