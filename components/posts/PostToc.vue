<template>
  <nav class="toc-body" :class="{ 'click-block': mobile }">
    <div
      v-for="link of toc"
      :key="link.id"
      class="toc-list"
      :class="{ 'click-block': mobile }"
    >
      <div
        class="toc-item"
        :class="{
          toc2: link.depth === 2,
          toc3: link.depth === 3,
          'click-block': mobile,
        }"
      >
        <TextLink :to="`#${link.id}`" @click.native="handleScroll(link.id)">
          {{ link.text }}
        </TextLink>
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
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // nuxt-link의 앵커 스크롤 문제를 해결하는 메소드
    // 출처: https://stackoverflow.com/questions/63732673/nuxt-link-redirect-to-the-same-anchor-with-hash
    handleScroll(anchorId) {
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`)

        // Check if the anchor has been found
        if (anchor) {
          window.scrollTo({
            // Scroll so that the anchor is at the top of the view
            top: anchor.getBoundingClientRect().top + window.pageYOffset,
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.toc-item {
  display: flex;
  align-items: center;
  font-weight: 500;
}
.toc3 {
  font-size: 0.8em;
  margin-left: 16px;

  &::before {
    content: '-';
    margin-right: 4px;
    margin-bottom: 3px;
  }
}
</style>
