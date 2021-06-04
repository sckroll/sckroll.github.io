<template>
  <nav>
    <ul>
      <li v-for="item in menu" :key="item.name">
        <nuxt-link :to="item.path" @click.native="closeDrawer">{{
          item.name
        }}</nuxt-link>
      </li>
      <li><fa-icon :icon="['far', 'moon']" /></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('drawer-close')
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

nav {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffffff;
  color: #000000;
  width: 40vw;
  height: 100vh;
  padding: 30px;

  ul {
    margin-top: 30px;
    padding: 0;
    list-style: none;
    font-size: 24px;
  }
  li {
    margin: 15px 0;
    transition: all 0.2s ease;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    a:hover {
      color: #bbbbbb;
      transition: all 0.2s ease;
    }
  }
}

@include viewpoint-xl {
  nav {
    display: none;
  }
}
@include viewpoint-lg {
  nav {
    display: none;
  }
}
@include viewpoint-md {
  nav {
    display: none;
  }
}
@include viewpoint-sm {
  nav {
    display: block;
  }
}
</style>
