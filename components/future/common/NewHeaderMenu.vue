<template>
  <nav class="header-menu">
    <ul>
      <li>About</li>
      <li>Posts</li>
      <li>Projects</li>
      <li>
        <SvgBase icon :width="24" :height="24">
          <IconLogo></IconLogo>
        </SvgBase>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav.header-menu {
  display: flex;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  font-family: 'Metropolis', sans-serif;
  font-size: 1.25em;
}
li {
  height: 1.25em;
}
</style>
