<template>
  <div class="timeline">
    <div class="graph-container">
      <div class="graph"></div>
    </div>
    <div class="timeline-content">
      <div
        v-for="(exp, index) of experiences"
        :key="index"
        class="timeline-item"
      >
        <div class="pointer"></div>
        <div class="content">
          <div class="time">{{ exp.time }}</div>
          <div class="divider"></div>
          <div class="text">{{ exp.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          time: '2021.08',
          text: '한국기술교육대학교 (KOREATECH) 컴퓨터공학부 졸업',
        },
        {
          time: '2021.01 ~',
          text: '다수의 Joomla! 기반 정적 웹 사이트 서버 구축 참여',
        },
        {
          time: '2020.09 ~ 2021.06',
          text: '스타트업 아이템 프로토타입 개발 참여',
        },
        {
          time: '2020.08 ~ 09',
          text: '프로그래머스 FE 취업스터디',
        },
        {
          time: '2020.07 ~ 08 ',
          text: 'E8IGHT 홈페이지 리뉴얼 참여',
        },
        {
          time: '2019.08',
          text: '정보처리기사 취득',
        },
        {
          time: '2019.04 ~ 10',
          text: '창업동아리 아이템 및 졸업작품 제작',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.timeline {
  display: flex;
  margin: -16px 0 24px;

  .graph-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32px;

    .graph {
      width: 8px;
      height: 100%;
      display: flex;
      justify-content: center;
      margin: 24px 0;
      background-color: $color-grey-6;
    }
  }
  &-content {
    margin-left: -32px;
  }
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 48px;

    &:last-child {
      margin-bottom: 0;
    }
    .pointer {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background-color: $color-primary;
    }
    .content {
      position: relative;
      top: 24px;
      margin-left: 32px;
    }
    .time {
      font-family: 'NanumSquare', sans-serif;
      font-size: 1.25em;
      font-weight: 700;
    }
    .divider {
      width: 32px;
      height: 2px;
      background-color: $color-grey-3;
      margin: 8px 0;
    }
  }
}

@include viewpoint-sm {
  .timeline {
    &-item {
      margin-bottom: 32px;

      .content {
        top: 20px;
        flex: 1;
      }
      .time {
        font-size: 1.1em;
      }
      .text {
        font-size: 0.9em;
      }
    }
  }
}
@include viewpoint-xs {
  .timeline {
    display: flex;
    justify-content: space-between;

    .graph-container {
      .graph {
        margin: 44px 0;
      }
    }
    &-content {
      width: 100%;
    }
    &-item {
      margin-bottom: 32px;

      .content {
        top: 20px;
        margin-left: 16px;
        flex: 1;
      }
      .time {
        font-size: 1.1em;
      }
      .text {
        font-size: 0.9em;
      }
    }
  }
}
</style>
