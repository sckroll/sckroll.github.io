<template>
  <div class="mobile-menu-container">
    <nav class="mobile-menu-nav">
      <ul>
        <li v-for="item in menu" :key="item.name">
          <nuxt-link :to="item.path" @click.native="closeMenu">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    document.documentElement.classList.add('scroll-disabled')
  },
  beforeDestroy() {
    document.documentElement.classList.remove('scroll-disabled')
  },
  methods: {
    closeMenu() {
      this.$store.commit('SET_MOBILE_MENU_STATE', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-menu-container {
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(white, 0.7);
  backdrop-filter: blur(4px);
  color: black;
  box-shadow: 0 2px 4px 2px rgba(black, 0.2);
  width: 100%;
  height: 100vh;
  padding: calc($header-height + 32px) 32px;
  transition: $fade-default;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-family: Metropolis, sans-serif;
  font-size: 2.5em;
  // font-weight: 500;
  padding: 0;
}
li {
  a {
    border-bottom: 3px solid transparent;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $color-primary;
    }
  }
}
.dark-mode {
  .mobile-menu-container {
    background-color: rgba(black, 0.7);
    color: white;
  }
  a {
    &:hover {
      border-bottom: 3px solid $color-secondary;
    }
  }
}

@include viewpoint-xl {
  .mobile-menu-container {
    display: none;
  }
}
@include viewpoint-lg {
  .mobile-menu-container {
    display: none;
  }
}
@include viewpoint-md {
  .mobile-menu-container {
    display: none;
  }
}
@include viewpoint-sm {
  .mobile-menu-container {
    display: flex;
  }
}
@include viewpoint-xs {
  .mobile-menu-container {
    display: flex;
  }
}
</style>
