<template>
  <div class="index-container">
    <header class="landing-header">
      <div class="header-wrapper">
        <h1 class="landing-title">
          {{ title1 }}<br />{{ title2 }}<br />{{ title3 }}
        </h1>
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
    </header>
    <main class="content">
      <div class="index-content-wrapper">
        <h2 class="component-label">최근 포스트</h2>
        <div class="recent-posts-temp">최근 포스트 영역</div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
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
.landing-header {
  display: flex;
  justify-content: center;
  background-image: url('/landingPageImg.jpg');
  background-size: cover;
  background-position-y: 95%;
  height: 700px;
  padding-top: 60px;
  font-family: 'NanumSquare', sans-serif;
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

.index-content-wrapper {
  width: var(--container-xl);
  padding: 0 30px;
}

.recent-posts-temp {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
  background-color: #cccccc;
}

@media screen and (max-width: 1200px) {
  .index-content-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .index-content-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .index-content-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
