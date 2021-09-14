<template>
  <div class="about-page">
    <about-section section-name="intro" :content="intro">
      <template #before-brace>`안녕하세요.<br /></template>
      <template #brace-content>게으르지만 꾸준한 개발자</template>
      <template #after-brace>
        <br />
        김성찬 (Sckroll) 입니다.`
      </template>
    </about-section>
    <about-section section-name="skills" :content="skills">
      <template #before-brace>`제가 가진</template>
      <template #brace-content>스킬</template>
      <template #after-brace>
        은
        <br />
        다음과 같습니다.`
      </template>
      <!-- <template #custom-content>yessss</template> -->
    </about-section>
    <about-section section-name="experiences">
      <template #before-brace>`저는 지금까지 다음과 같은<br /></template>
      <template #brace-content>경험</template>
      <template #after-brace> 을 했습니다.` </template>
      <template #custom-content>
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
      </template>
    </about-section>
    <about-section section-name="projects" :content="projects">
      <template #before-brace>`다음과 같은</template>
      <template #brace-content>프로젝트</template>
      <template #after-brace>
        를
        <br />
        개발했습니다.`
      </template>
      <!-- <template #custom-content>yessss</template> -->
    </about-section>
    <about-section section-name="etc" :content="etc" :brace="false">
      <template #title>Etc.</template>
    </about-section>
    <about-section section-name="contacts" :content="contacts" :brace="false">
      <template #title>연락처 및 링크</template>
    </about-section>
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
  h3 {
    font-size: 1.25em;
    font-weight: 900;
    margin-bottom: 16px;
  }
}
</style>
