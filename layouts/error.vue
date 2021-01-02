<template>
  <div class="container">
    <div class="error-container">
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
    </div>
  </div>
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
}
</script>

<style>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.error-code h1 {
  font-size: 64px;
  font-weight: 500;
}

.error-message {
  margin: 10px 0;
}
</style>
