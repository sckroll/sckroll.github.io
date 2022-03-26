<template>
  <nav class="drawer">
    <ul>
      <li v-for="item in menu" :key="item.name">
        <nuxt-link :to="item.path" @click.native="closeDrawer">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
    <div class="toggle-container">
      <ColorModeToggle drawer></ColorModeToggle>
    </div>
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
nav.drawer {
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  color: black;
  box-shadow: 0 2px 4px 2px rgba(black, 0.2);
  width: 40%;
  height: 100vh;
  padding: 48px 32px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: Metropolis, sans-serif;
    font-size: 1.5em;
    padding: 0;
  }
  li {
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
.toggle-container {
  display: flex;
}
.dark-mode nav.drawer {
  background-color: $color-grey-1;
  color: white;
}

@include viewpoint-xl {
  nav.drawer {
    display: none;
  }
}
@include viewpoint-lg {
  nav.drawer {
    display: none;
  }
}
@include viewpoint-md {
  nav.drawer {
    display: none;
  }
}
@include viewpoint-sm {
  nav.drawer {
    display: flex;
  }
}
@include viewpoint-xs {
  nav.drawer {
    display: flex;
    width: 50%;
  }
}
</style>
