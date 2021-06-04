<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in menu" :key="item.name">
        <nuxt-link :to="{ path: item.path }">{{ item.name }}</nuxt-link>
      </li>
      <li><fa-icon :icon="['far', 'moon']" /></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Posts',
          path: '/posts',
        },
        {
          name: 'Projects',
          path: '/projects',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
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
    margin: 0 15px;
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
