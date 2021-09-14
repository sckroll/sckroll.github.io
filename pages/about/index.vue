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
        <nuxt-content :document="intro" />
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
        <nuxt-content :document="skills" />
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
        <nuxt-content :document="projects" />
      </div>
    </section>
    <section class="about faq">
      <div class="left">
        <h2>FAQ</h2>
      </div>
      <div class="right">
        <nuxt-content :document="etc" />
      </div>
    </section>
    <section class="about contacts">
      <div class="left">
        <h2>연락처 및 링크</h2>
      </div>
      <div class="right">
        <nuxt-content :document="contacts" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const intro = await $content('about/intro').fetch()
      const skills = await $content('about/skills').fetch()
      const projects = await $content('about/projects').fetch()
      const etc = await $content('about/etc').fetch()
      const contacts = await $content('about/contacts').fetch()

      return {
        intro,
        skills,
        projects,
        etc,
        contacts,
      }
    } catch (e) {
      error({ statusCode: e.statusCode || e.status || 500 })
    }
  },
}
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
  margin-bottom: 32px;
  font-size: 1.1em;
  line-height: 170%;

  &:last-child {
    margin-bottom: 0;
  }
}
ul {
  margin-bottom: 48px;
  padding-left: 24px;
  list-style: circle;
  font-size: 1.1em;
  line-height: 170%;

  &:last-child {
    margin-bottom: 0;
  }
}
section.contacts {
  p {
    margin-bottom: 48px;

    &:last-child {
      margin-bottom: 0;
    }
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
