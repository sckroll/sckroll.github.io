<template>
  <section class="about-content">
    <h1>지금까지 다음과 같은 경험을 했습니다.</h1>
    <div class="timeline-container">
      <div class="timeline-items">
        <div
          v-for="(exp, index) of experiences"
          :key="index"
          class="timeline-item"
        >
          <ExperienceItem
            v-if="!isMobile"
            :exp="index % 2 === 0 ? null : exp"
          ></ExperienceItem>
          <div class="graph-area">
            <div class="timeline-point"></div>
          </div>
          <ExperienceItem v-if="isMobile" :exp="exp" right></ExperienceItem>
          <ExperienceItem
            v-else
            :exp="index % 2 === 0 ? exp : null"
            right
          ></ExperienceItem>
        </div>
      </div>
      <div class="graph-core-container">
        <div class="graph-core"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          time: '2022.05',
          content: 'SSAFY 7기 1학기 관통(종합) 프로젝트 최우수상',
        },
        {
          time: '2022.01 ~',
          content: '삼성 청년 SW 아카데미 (SSAFY) 7기 입학',
        },
        {
          time: '2021.08',
          content: '한국기술교육대학교 (KOREATECH) 컴퓨터공학부 졸업',
        },
        {
          time: '2021.01 ~',
          content: '다수의 Joomla! 기반 정적 웹 사이트 서버 구축 참여',
        },
        {
          time: '2020.09 ~ 2021.06',
          content: '스타트업 아이템 프로토타입 개발 참여',
        },
        {
          time: '2020.08 ~ 09',
          content: '프로그래머스 FE 취업스터디',
        },
        {
          time: '2019.08',
          content: '정보처리기사 취득',
        },
        {
          time: '2019.04 ~ 10',
          content: '창업동아리 아이템 및 졸업작품 제작',
        },
      ],
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile
    },
  },
}
</script>

<style lang="scss" scoped>
.timeline-container {
  position: relative;
}
.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0;
}
.timeline-item {
  display: flex;
  gap: 16px;
}
.graph-area {
  display: flex;
  justify-content: center;
}
.timeline-point {
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  border: 4px solid $color-primary;
  background-color: $color-grey-200;
}
.graph-core-container {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.graph-core {
  width: 4px;
  background-color: $color-grey-400;
}
.dark-mode {
  .timeline-point {
    border: 4px solid $color-secondary;
    background-color: $color-grey-900;
  }
  .graph-core {
    background-color: $color-grey-700;
  }
}

@include viewpoint-sm {
  .graph-core-container {
    justify-content: flex-start;
    margin-left: 10px;
  }
}
@include viewpoint-xs {
  .graph-core-container {
    justify-content: flex-start;
    margin-left: 10px;
  }
}
</style>
