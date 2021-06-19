<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in menu" :key="item.name">
        <nuxt-link :to="item.path">
          {{ item.name }}
        </nuxt-link>
      </li>
      <li><fa-icon :icon="['far', 'moon']" /></li>
    </ul>
    <span class="mobile-menu" @click="openDrawer">
      <fa-icon :icon="['fa', 'bars']" />
    </span>
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
    openDrawer() {
      this.$emit('drawer-open')
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

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

@include viewpoint-xl {
  ul {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
@include viewpoint-lg {
  ul {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
@include viewpoint-md {
  ul {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
@include viewpoint-sm {
  ul {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
@include viewpoint-xs {
  ul {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
