<template>
  <nav class="header-menu">
    <ul>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts">Posts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projects">Projects</nuxt-link>
      </li>
      <li>
        <SvgBase icon>
          <IconLight></IconLight>
          <!-- <IconDark></IconDark> -->
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
  align-items: center;
  gap: 32px;
  font-family: Metropolis, sans-serif;
  font-size: 1.25em;
  font-weight: 300;
}
li {
  display: flex;
  align-items: center;
}
</style>
