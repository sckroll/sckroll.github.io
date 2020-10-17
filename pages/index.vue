<template>
  <div class="index-container">
    <header class="landing-header">
      <div class="header-wrapper">
        <h1 class="landing-title">
          {{ title1 }}<br />{{ title2 }}<br />{{ title3 }}
        </h1>
        <nav class="nav-menu">
          <ul>
            <li><a>About</a></li>
            <li><a>Posts</a></li>
            <li><a>Projects</a></li>
            <li><fa-icon :icon="['far', 'moon']" /></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="content">
      <h2 class="recent-posts">최근 포스트</h2>
      <div class="recent-posts-temp">최근 포스트 영역</div>
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

.recent-posts {
  margin-bottom: 20px;
}

.recent-posts-temp {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
  background-color: #cccccc;
}
</style>
