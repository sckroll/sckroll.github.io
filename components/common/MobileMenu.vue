<template>
  <div class="mobile-menu-container">
    <nav class="mobile-menu-nav">
      <ul class="display">
        <li v-for="item in menu" :key="item.name">
          <TextLink :to="item.path" thick @click.native="closeMenu">
            {{ item.name }}
          </TextLink>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(white, 0.7);
  backdrop-filter: blur(4px);
  color: black;
  width: 100%;
  height: 100vh;
  transition: $fade-default;
}
nav {
  padding: 0 48px;
  width: $breakpoint-sm;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 2.5em;
  padding: 0;
}
li {
  opacity: 0;

  &:nth-of-type(1) {
    animation: item-fade-up 0.4s $move-smooth forwards;
  }
  &:nth-of-type(2) {
    animation: item-fade-up 0.4s $move-smooth forwards 0.05s;
  }
  &:nth-of-type(3) {
    animation: item-fade-up 0.4s $move-smooth forwards 0.1s;
  }
}
.dark-mode {
  .mobile-menu-container {
    background-color: rgba(black, 0.7);
    color: white;
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

@keyframes item-fade-up {
  0% {
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
