<template>
  <section class="error-container">
    <div class="error-content">
      <div class="error-code">
        <h1 v-if="error.statusCode">{{ error.statusCode }}</h1>
      </div>
      <div class="error-message">
        <h2 v-if="error.statusCode === 404">
          {{ message.notFound }}
        </h2>
        <h2 v-else>{{ message.other }}</h2>
      </div>
    </div>
    <TextLink to="/" class="homepage-link">홈으로</TextLink>
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
section.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: calc(100vh - #{$header-height} - #{$footer-height});

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  h1 {
    font-size: 4em;
    font-weight: 500;
  }
  h2 {
    font-weight: 500;
  }
}
.homepage-link {
  font-size: 1.1em;
  font-weight: 600;
}

@include viewpoint-sm {
  section.error-container {
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
@include viewpoint-xs {
  section.error-container {
    h1 {
      font-size: 3em;
    }
    .error-message {
      font-size: 0.8em;
    }
  }
  .homepage-link {
    font-size: 1em;
  }
}
</style>
