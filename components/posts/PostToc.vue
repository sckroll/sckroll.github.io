<template>
  <nav class="post-toc">
    <div class="toggle" @click="toggleToc"></div>
    <div class="wrapper viewpoint">
      <div class="toc-header">
        <div>목차</div>
        <span v-if="isExpanded">
          <fa-icon :icon="['fa', 'chevron-up']" class="btn-icon" />
        </span>
        <span v-else>
          <fa-icon :icon="['fa', 'chevron-down']" class="btn-icon" />
        </span>
      </div>
      <div v-if="isExpanded" class="toc-body">
        <nuxt-link
          v-for="link of toc"
          :key="link.id"
          class="toc-list"
          :to="`#${link.id}`"
        >
          <div :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }">
            {{ link.text }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: true,
    }
  },
  mounted() {
    const isTocOpened = localStorage.getItem('sckrollTocState')
    if (isTocOpened && isTocOpened !== 'true') {
      this.isExpanded = false
    } else {
      localStorage.setItem('sckrollTocState', true)
    }
  },
  methods: {
    toggleToc() {
      this.isExpanded = !this.isExpanded
      localStorage.setItem('sckrollTocState', this.isExpanded)
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

.post-toc {
  display: flex;
  justify-content: center;
  width: 100%;

  .toggle {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 53px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #00000022;
      transition: all 0.2s ease;
    }
  }
  .wrapper {
    z-index: 1;
    width: 100%;
    padding: 10px 30px;
  }
  .toc-header {
    display: flex;
    align-items: center;

    div {
      margin: 5px 0;
      font-size: 20px;
      font-family: 'NanumSquare', sans-serif;
      font-weight: 600;
    }

    .btn-icon {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  .toc-body {
    margin-top: 13px;
  }
}

.toc-list {
  div {
    margin: 5px 0;
    padding: 3px 0 3px 20px;
  }

  &:hover .toc2,
  &:hover .toc3 {
    background-color: #cccccc;
    transition: all 0.2s ease;
  }

  .toc2 {
    transition: all 0.2s ease;
  }
  .toc3 {
    transition: all 0.2s ease;
    font-size: 14px;

    &::before {
      content: '-';
    }
  }
}
</style>
