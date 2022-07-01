<template>
  <div class="page-container">
    <AboutJumbotron></AboutJumbotron>
    <SvgBase class="scroll-icon-animation" width="48" height="48" icon>
      <IconScroll></IconScroll>
    </SvgBase>
    <div class="about-content-container">
      <AboutIntro></AboutIntro>
      <AboutSkills></AboutSkills>
      <AboutExperiences></AboutExperiences>
      <AboutProjects></AboutProjects>
      <AboutEtc></AboutEtc>
      <AboutContacts></AboutContacts>
    </div>
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
section.about-content {
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 1.75em;
    font-weight: 600;
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
  gap: 96px;
}
.scroll-icon-animation {
  position: fixed;
  bottom: 48px;
  right: calc((100vw - 1200px) / 2 + 24px);
}
</style>
