<template>
  <div class="about-page">
    <section class="about intro">
      <div class="left">
        <h2>
          `안녕하세요.
          <br />
          <span class="brace">${</span>
          <span class="brace-content">게으르지만 꾸준한 개발자</span>
          <span class="brace">}</span>
          <br />
          김성찬 (Sckroll) 입니다.`
        </h2>
      </div>
      <div class="right">
        <p>
          <strong>웹 프론트엔드(Front-end)</strong> 개발자가 되고자 끊임없이
          공부하는 20대입니다.
        </p>
        <p>
          학부 과제로 웹 사이트를 만드는 과정에서 PC나 모바일에 상관없이 웹을
          통해 동일한 서비스를 사용자에게 제공할 수 있다는 점이 매력적으로
          다가왔습니다. 특히 사용자가 직접 볼 수 있고 소통할 수 있는 프론트엔드
          부분이 마음에 들었고, 제가 원하는 대로 화면을 디자인하는 것이
          재미있었기 때문에 진로를 프론트엔드로 결정하게 되었습니다.
        </p>
        <p>
          목표는 정했지만 직접 실행에 옮기지 않는 제 단점을 고치기 위해 2020년
          12월 말부터 1일 1커밋 운동에 동참하기 시작했고, 지금도 꾸준히 유지하고
          있습니다.
        </p>
        <p>
          당장은 프론트엔드 개발자를 지향하지만, 백엔드 기술에도 관심이 있어서
          서버와 API를 구성하고 웹 앱을 클라우드로 배포해본 경험이 있습니다.
          장기적으로는 프론트엔드와 백엔드를 아우르는 풀스택 개발자가 되어 많은
          사람들이 사용하는 서비스 개발에 주도적으로 기여하고 싶습니다.
        </p>
      </div>
    </section>
    <section class="about skills">
      <div class="left">
        <h2>
          `제가 가진
          <span class="brace">${</span>
          <span class="brace-content">스킬</span>
          <span class="brace">}</span>은
          <br />
          다음과 같습니다.`
        </h2>
      </div>
      <div class="right">
        <div class="skill-list frontend">
          <h3>Front-end</h3>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>TypeScript</li>
            <li>Vue.js, Nuxt.js</li>
            <li>React</li>
            <li>CSS, SCSS</li>
          </ul>
        </div>
        <div class="skill-list backend">
          <h3>Back-end</h3>
          <ul>
            <li>Node.js (Express, Koa)</li>
            <li>Database (MongoDB, MySQL, Oracle)</li>
            <li>Flask</li>
          </ul>
        </div>
        <div class="skill-list etc">
          <h3>DevOps & Etc.</h3>
          <ul>
            <li>Docker</li>
            <li>Cloud (AWS, Azure, GCP)</li>
            <li>자료구조 / 알고리즘</li>
            <li>운영체제 / 네트워크</li>
            <li>Git / GitHub</li>
            <li>Joomla! 기반 정적 웹 페이지 호스팅 인프라 구축</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="about experiences">
      <div class="left">
        <h2>
          `저는 지금까지 다음과 같은
          <br />
          <span class="brace">${</span>
          <span class="brace-content">경험</span>
          <span class="brace">}</span>을 했습니다.`
        </h2>
      </div>
      <div class="right">
        <ul>
          <li>2021.01 ~ Joomla! 기반 정적 웹 사이트 서버 구축 참여</li>
          <li>2020.12 ~ 2021.06 스타트업 아이템 프로토타입 개발</li>
          <li>2020.08 ~ 09 프로그래머스 FE 취업스터디</li>
          <li>2020.07 ~ 08 E8IGHT 홈페이지 리뉴얼 개발 참여</li>
          <li>2019.08 정보처리기사 취득</li>
          <li>2019.03 ~ 10 창업동아리 참여 및 졸업작품 제작</li>
          <li>2018.12 ~ 2019.01 SW 기업 단기현장실습(인턴)</li>
          <li>2014.03 한국기술교육대학교 (KOREATECH) 컴퓨터공학부 입학</li>
        </ul>
      </div>
    </section>
    <section class="about projects">
      <div class="left">
        <h2>
          `다음과 같은
          <span class="brace">${</span>
          <span class="brace-content">프로젝트</span>
          <span class="brace">}</span>를
          <br />
          개발했습니다.`
        </h2>
      </div>
      <div class="right">
        <ul>
          <!-- <li>OEUM</li> -->
          <li>2048 클론</li>
          <li>개인 홈페이지 및 블로그</li>
          <li>졸업 작품 및 스타트업 아이템 프로토타입(DoTS)</li>
          <li>서비스지향컴퓨팅및실습 텀 프로젝트</li>
          <li>웹프로그래밍(창업) 텀 프로젝트</li>
        </ul>
        <p>
          각 프로젝트의 자세한 정보는
          <nuxt-link to="projects">여기</nuxt-link>서 확인하실 수 있습니다.
        </p>
      </div>
    </section>
    <section class="about faq">
      <div class="left">
        <h2>FAQ</h2>
      </div>
      <div class="right">
        <h3>왜 Sckroll임? Scroll 오타 아님?</h3>
        <p>
          제 이니셜(SCK)과 Scroll의 합성어입니다. 처음 닉네임을 지을 때 제
          이름의 이니셜이 들어가야 한다는 것을 전제로 지었는데, 적절한 단어를
          찾다 보니 어감도 괜찮고, '스크롤'과 발음이 같아서 자연스럽게 지금의
          닉네임이 되었습니다.
        </p>
      </div>
    </section>
    <section class="about contacts">
      <div class="left">
        <h2>연락처 및 링크</h2>
      </div>
      <div class="right">
        <p>
          <strong>E-mail</strong><br />
          <a href="mailto://kimsc0714@gmail.com">kimsc0714@gmail.com</a>
        </p>
        <p>
          <strong>GitHub</strong><br />
          <a href="https://github.com/sckroll">https://github.com/sckroll</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@include set-viewpoint;

.about-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: $header-height;
  padding: 64px 0;

  a {
    border-bottom: 2px solid $sckroll-grey-4;
    transition: $fade-default;

    &:hover {
      border-bottom: 2px solid $sckroll-primary;
      transition: $fade-default;
    }
    &:active {
      color: $sckroll-primary;
      transition: $fade-default;
    }
  }
}
section.about {
  display: flex;
  padding: 64px 32px;
  box-sizing: border-box;

  .left {
    flex: 2;
  }
  .right {
    flex: 3;
    border-left: 3px solid $sckroll-grey-4;
    padding-left: 32px;
  }
}
h2 {
  margin-left: 16px;
  font-size: 1.75em;
  line-height: 150%;
  text-indent: -16px;
}
.brace {
  color: $sckroll-secondary;
}
.brace-content {
  color: $sckroll-primary;
}
p {
  margin: 32px 0;
  font-size: 1.1em;
  line-height: 170%;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
ul {
  padding-left: 24px;
  list-style: circle;
  font-size: 1.1em;
  line-height: 170%;
}
.skill-list {
  margin: 48px 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
h3 {
  font-size: 1.25em;
  font-weight: 900;
  margin-bottom: 16px;
}

@include viewpoint-xl {
  section {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  section {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  section {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  section {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  section {
    width: 100%;
  }
}
</style>
