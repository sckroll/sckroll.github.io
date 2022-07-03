<template>
  <section class="about-content">
    <h1>아래와 같은 프로젝트를 개발했습니다.</h1>
    <div class="projects">
      <div class="project">
        <TextLink to="/projects/2048">2048 클론</TextLink>
        <div class="description">
          유명한 2048 게임을 저만의 방법으로 구현한 프로젝트입니다.
        </div>
      </div>
      <div class="project">
        <TextLink to="/projects/happyhouse">HappyHouse</TextLink>
        <div class="description">
          명세서를 기반으로 사용자 맞춤형 주택 실거래가 정보 제공 서비스를
          만들고, 추가 기능을 구현했습니다.
        </div>
      </div>
      <div class="project">
        <TextLink to="/projects/blog">개인 홈페이지 및 블로그</TextLink>
        <div class="description">
          지금 여러분이 보고 계시는 이 사이트를 직접 디자인하고 개발했습니다.
        </div>
      </div>
    </div>
    <TextLink to="/projects" class="more-link">
      각 프로젝트의 자세한 정보를 확인하시려면 여기를 클릭해주세요!
    </TextLink>
  </section>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  font-size: 1.25em;
  gap: 24px;

  .text-link {
    font-weight: 700;
  }
}
.description {
  margin-bottom: 4px;
}
.more-link {
  font-size: 1.25em;
}

@include viewpoint-lg {
  .project,
  .more-link {
    font-size: 1.1em;
  }
}
@include viewpoint-md {
  .projects {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .project {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .project,
  .more-link {
    font-size: 1.1em;
  }
}
@include viewpoint-sm {
  .projects {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .project {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .project,
  .more-link {
    font-size: 1.1em;
  }
}
@include viewpoint-xs {
  .projects {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .project {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .project,
  .more-link {
    font-size: 1.1em;
  }
}
</style>
