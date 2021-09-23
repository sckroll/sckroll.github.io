<template>
  <transition name="fade">
    <nav v-if="value" class="post-mobile-toc click-block">
      <div class="toc-body click-block">
        <div v-for="link of toc" :key="link.id" class="toc-list">
          <div
            class="toc-item click-block"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <nuxt-link :to="`#${link.id}`">
              <span class="toc-text">{{ link.text }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    toc: {
      type: Array,
      required: true,
    },
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          window.addEventListener('click', this.clickListener)
        } else {
          window.removeEventListener('click', this.clickListener)
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickListener)
  },
  methods: {
    clickListener({ target }) {
      if (target.classList.contains('click-block')) return
      this.hideToc()
    },
    hideToc() {
      this.$emit('input', false)
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.post-mobile-toc {
  z-index: 1;
  position: fixed;
  right: 32px;
  bottom: 96px;
  padding: 16px;
  background-color: var(--color-sheet);
  box-shadow: 0 1px 2px 1px rgba(black, 0.2);
}
.toc-list {
  .toc-item {
    width: 100%;
    margin: 8px 0;
  }
  .toc-text {
    padding: 2px 0;
    border-bottom: 2px solid transparent;
    transition: $fade-default;

    &:hover {
      border-bottom: 2px solid $color-primary;
      transition: $fade-default;
    }
    &:active {
      color: $color-primary;
      transition: $fade-default;
    }
  }
  .toc3 {
    font-size: 0.8em;
    margin-left: 16px;

    &::before {
      content: '-';
      margin-right: 4px;
    }
  }
}
</style>
