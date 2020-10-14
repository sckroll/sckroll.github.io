<template>
  <div class="content-container">
    <div class="landing">
      <div class="header-wrapper">
        <span class="landing-title">
          {{ title1 }}<br />{{ title2 }}<br />{{ title3 }}
        </span>
        <nav class="nav-menu">
          <ul>
            <li><a>About</a></li>
            <li><a>Posts</a></li>
            <li><a>Projects</a></li>
            <li><fa-icon :icon="['far', 'moon']" /></li>
          </ul>
        </nav>
      </div>
    </div>
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
.content-container {
  min-height: 200vh;
}

.landing {
  background-image: url('/landingPageImg.jpg');
  background-size: cover;
  background-position-y: 95%;
  height: 700px;
  color: #ffffff;
  padding-top: 60px;
  font-family: 'NanumSquare', sans-serif;
}

.landing-title {
  float: left;
  font-size: 32px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 10px;
  text-align: left;
}
</style>
