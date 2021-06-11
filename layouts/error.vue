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
    <div class="homepage-link">
      <nuxt-link to="/">홈으로</nuxt-link>
    </div>
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
        other: '페이지를 불러오는데 에러가 발생했습니다.',
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
  height: 65vh;
}

.error-code h1 {
  font-size: 64px;
  font-weight: 500;
}

.error-message {
  margin: 10px 0;
}

.homepage-link {
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
  padding: 5px 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #eeeeee;
    transition: all 0.2s ease;
  }
}
</style>
