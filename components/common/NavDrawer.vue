<template>
  <nav>
    <ul>
      <li v-for="item in menu" :key="item.name">
        <nuxt-link :to="item.path" @click.native="closeDrawer">{{
          item.name
        }}</nuxt-link>
      </li>
      <li>
        <dark-mode-toggle></dark-mode-toggle>
      </li>
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
  background-color: var(--color-header);
  color: var(--color-text);
  box-shadow: 0 2px 4px 2px rgba(black, 0.2);
  width: 40%;
  height: 100vh;
  padding: 32px;

  ul {
    margin-top: 32px;
    padding: 0;
    list-style: none;
    font-size: 1.5em;
  }
  li {
    margin: 24px 0;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    a {
      padding: 4px 0;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: $fade-default;

      &:hover {
        border-bottom: 3px solid $color-primary;
        transition: $fade-default;
      }
      &:active {
        color: $color-primary;
        transition: $fade-default;
      }
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
@include viewpoint-xs {
  nav {
    display: block;
    width: 50%;
  }
}
</style>
