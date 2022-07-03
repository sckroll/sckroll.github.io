<template>
  <section class="about-content">
    <h1>제가 가진 스킬은 다음과 같습니다.</h1>
    <div class="skills">
      <section v-for="skill in skills" :key="skill.category" class="skill">
        <h1>{{ skill.category }}</h1>
        <div v-for="track in skill.tracks" :key="track.name" class="track">
          <div class="name">{{ track.name }}</div>
          <div class="level">
            <div
              v-for="num in maxLevelArray"
              :key="num"
              class="segment"
              :class="{ marked: num <= track.level }"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      maxLevel: 3,
      skills: [
        {
          category: 'Frontend',
          tracks: [
            {
              name: 'JavaScript (ES6+)',
              level: 3,
            },
            {
              name: 'Vue.js',
              level: 3,
            },
            {
              name: 'TypeScript',
              level: 2,
            },
            {
              name: 'Nuxt.js',
              level: 2,
            },
            {
              name: 'Sass (SCSS)',
              level: 2,
            },
            {
              name: 'SVG',
              level: 1,
            },
          ],
        },
        {
          category: 'Backend',
          tracks: [
            {
              name: 'Node.js (Express, Koa)',
              level: 3,
            },
            {
              name: 'Spring & Spring Boot',
              level: 2,
            },
            {
              name: 'MySQL',
              level: 2,
            },
            {
              name: 'MongoDB',
              level: 2,
            },
          ],
        },
        {
          category: 'Etc.',
          tracks: [
            {
              name: 'Python',
              level: 2,
            },
            {
              name: 'Docker',
              level: 2,
            },
            {
              name: 'Cloud (GCP, AWS)',
              level: 2,
            },
            {
              name: 'Git & GitHub',
              level: 2,
            },
            {
              name: 'Joomla!',
              level: 2,
            },
          ],
        },
      ],
    }
  },
  computed: {
    maxLevelArray() {
      return new Array(this.maxLevel).fill(0).map((_, index) => index + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
}
.skill {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 1.5em;
  }
}
.track {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .name {
    font-size: 1.25em;
  }
  .level {
    display: flex;
    gap: 8px;
  }
}
.segment {
  flex: 1;
  height: 4px;
  background-color: $color-grey-400;

  &.marked {
    background-color: $color-primary;
  }
}
.dark-mode {
  .segment {
    background-color: $color-grey-700;

    &.marked {
      background-color: $color-secondary;
    }
  }
}

@include viewpoint-lg {
  .skill {
    gap: 24px;

    h1 {
      font-size: 1.3em;
    }
  }
  .track .name {
    font-size: 1.1em;
  }
}
@include viewpoint-md {
  .skills {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
    column-gap: 64px;
  }
  .skill {
    gap: 24px;

    h1 {
      font-size: 1.3em;
    }
  }
  .track .name {
    font-size: 1.1em;
  }
}
@include viewpoint-sm {
  .skills {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
  .skill {
    gap: 24px;

    h1 {
      font-size: 1.3em;
    }
  }
  .track .name {
    font-size: 1.1em;
  }
}
@include viewpoint-xs {
  .skills {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
  .skill {
    gap: 24px;

    h1 {
      font-size: 1.3em;
    }
  }
  .track .name {
    font-size: 1.1em;
  }
}
</style>
