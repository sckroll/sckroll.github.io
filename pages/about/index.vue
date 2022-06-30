<template>
  <div class="page-container">
    <AboutIntro></AboutIntro>
    <AboutSkills></AboutSkills>
    <AboutExperiences></AboutExperiences>
    <AboutProjects></AboutProjects>
    <AboutEtc></AboutEtc>
    <AboutContacts></AboutContacts>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '소개',
    }
  },
}
</script>

<style lang="scss">
section.about {
  h1 {
    font-size: 2em;
    font-weight: 500;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 500;
  }
  p {
    font-size: 1.25em;
    line-height: 1.5em;
  }
}
.section-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
