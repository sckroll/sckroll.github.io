<template>
  <nav class="post-toc">
    <div class="post-toc-toggle" @click="toggleToc"></div>
    <div class="post-toc-wrapper">
      <div class="toc-header">
        <div>목차</div>
        <span v-if="isExpanded" class="toc-expand-button">
          <fa-icon :icon="['fa', 'chevron-up']" class="toc-expand-icon" />
        </span>
        <span v-else class="toc-reduce-button">
          <fa-icon :icon="['fa', 'chevron-down']" class="toc-expand-icon" />
        </span>
      </div>
      <div v-if="isExpanded" class="toc-main">
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

<style>
.post-toc {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #eeeeee;
}

.post-toc-toggle {
  position: absolute;
  width: 100%;
  height: 53px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.post-toc-toggle:hover {
  background-color: #00000022;
  transition: all 0.2s ease;
}

.post-toc-wrapper {
  width: var(--container-xl);
  padding: 10px 30px;
}

.toc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toc-header div {
  margin: 5px 0;
  font-size: 20px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: 600;
}

.toc-expand-button,
.toc-reduce-button {
  font-size: 24px;
  cursor: pointer;
}

.toc-main {
  margin-top: 13px;
}

.toc-list > div {
  margin: 5px 0;
  padding: 3px 0 3px 20px;
}

.toc-list:hover .toc2,
.toc-list:hover .toc3 {
  background-color: #cccccc;
  transition: all 0.2s ease;
}

.toc2 {
  list-style: none;
  transition: all 0.2s ease;
}

.toc3 {
  list-style: none;
  transition: all 0.2s ease;
}

@media screen and (max-width: 1200px) {
  .post-toc-wrapper {
    width: var(--container-lg);
  }
}

@media screen and (max-width: 992px) {
  .post-toc-wrapper {
    width: var(--container-md);
  }
}

@media screen and (max-width: 768px) {
  .post-toc-wrapper {
    width: var(--container-sm);
  }
}

@media screen and (max-width: 576px) {
}
</style>
