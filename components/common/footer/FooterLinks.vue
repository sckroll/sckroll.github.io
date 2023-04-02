<script setup lang="ts">
const mailUrl = 'mailto://kimsc0714@gmail.com'
const githubUrl = 'https://github.com/sckroll'
</script>

<template>
  <div class="links">
    <IconLink :to="mailUrl">
      <IconEmail />
    </IconLink>
    <IconLink external :to="githubUrl">
      <IconGitHub />
    </IconLink>
  </div>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  gap: 1rem;
}
</style>