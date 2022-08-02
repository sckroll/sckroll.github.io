<template>
  <div class="page-container">
    <AboutJumbotron></AboutJumbotron>
    <div class="about-content-container">
      <AboutIntro></AboutIntro>
      <AboutSkills></AboutSkills>
      <AboutExperiences></AboutExperiences>
      <AboutProjects></AboutProjects>
      <AboutQna></AboutQna>
      <AboutContacts></AboutContacts>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '소개',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to Sckroll`s website',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
section.about-content {
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 1.75em;
    font-weight: 600;
    line-height: 1.5em;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }
  p {
    font-size: 1.25em;
    line-height: 1.75em;
  }
}
.about-content-container {
  display: flex;
  flex-direction: column;
  gap: 256px;
  margin-bottom: 64px;
}

@include viewpoint-lg {
  section.about-content {
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }
    h2 {
      font-size: 1.25em;
      font-weight: 600;
    }
    p {
      font-size: 1.1em;
      line-height: 1.75em;
    }
  }
}
@include viewpoint-md {
  section.about-content {
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }
    h2 {
      font-size: 1.25em;
      font-weight: 600;
    }
    p {
      font-size: 1.1em;
      line-height: 1.75em;
    }
  }
}
@include viewpoint-sm {
  section.about-content {
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }
    h2 {
      font-size: 1.25em;
      font-weight: 600;
    }
    p {
      font-size: 1.1em;
      line-height: 1.75em;
    }
  }
}
@include viewpoint-xs {
  section.about-content {
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }
    h2 {
      font-size: 1.25em;
      font-weight: 600;
    }
    p {
      font-size: 1.1em;
      line-height: 1.75em;
    }
  }
}
</style>
