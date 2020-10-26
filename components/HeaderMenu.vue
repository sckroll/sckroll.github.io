<template>
  <div class="header-wrapper">
    <h1 v-if="landing" class="landing-title">
      {{ title1 }}<br />{{ title2 }}<br />{{ title3 }}
    </h1>
    <span v-else class="logo">
      <nuxt-link :to="{ name: 'index' }">Sckroll</nuxt-link>
    </span>
    <nav-menu />
  </div>
</template>

<script>
export default {
  props: {
    landing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title1: '예비 개발자 Sckroll의',
      title2: '홈페이지에 오신 것을',
      title3: '환영합니다',
    }
  },
}
</script>

<style>
.header-wrapper {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: var(--container-xl);
  padding: 0 30px;
}

.landing-title {
  float: left;
  font-size: 32px;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
}

/* br 태그 간격(행간)을 증가 */
.landing-title br {
  display: block;
  content: '';
  margin: 5px 0;
}

.logo {
  font-size: 32px;
  font-weight: 700;
}

@media screen and (max-width: 1200px) {
  .header-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .header-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .header-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
