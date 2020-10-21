<template>
  <div class="header-wrapper">
    <h1 v-if="landing" class="landing-title">
      {{ title1 }}<br />{{ title2 }}<br />{{ title3 }}
    </h1>
    <span v-else class="logo">
      <nuxt-link :to="{ name: 'index' }">Sckroll</nuxt-link>
    </span>
    <nav class="nav-menu">
      <ul>
        <li>
          <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'posts' }">Posts</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
        </li>
        <li><fa-icon :icon="['far', 'moon']" /></li>
      </ul>
    </nav>
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

.landing-header .nav-menu {
  color: #ffffffaa;
}

/* br 태그 간격(행간)을 증가 */
.landing-title br {
  display: block;
  content: '';
  margin: 5px 0;
}

.logo {
  float: left;
  font-size: 32px;
  font-weight: 700;
}

.nav-menu {
  float: right;
  list-style: none;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
}

.nav-menu ul {
  padding: 0;
}

.nav-menu li {
  margin: 0 10px;
  display: inline;
  transition: all 0.2s ease;
}

.nav-menu li:first-child {
  margin-left: 0;
}

.nav-menu li:last-child {
  margin-right: 0;
}

.nav-menu li:hover {
  color: #ffffff;
  transition: all 0.2s ease;
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
