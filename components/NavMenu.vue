<template>
  <nav class="nav-menu">
    <ul>
      <li>
        <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'posts' }">Posts</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
      </li>
      <li><fa-icon :icon="['far', 'moon']" /></li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav-menu {
  position: relative;
  top: 5px;
  list-style: none;
  padding: 0;
  font-size: 24px;
  font-weight: 500;

  ul {
    padding: 0;
  }
  li {
    margin: 0 10px;
    display: inline;
    transition: all 0.2s ease;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: #bbbbbb;
      transition: all 0.2s ease;
    }
  }
}

.landing-header {
  .nav-menu {
    color: #ffffff88;

    li:hover {
      color: #ffffff;
    }
  }
}
</style>
