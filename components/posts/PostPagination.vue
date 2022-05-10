<template>
  <div class="pagination-container">
    <div class="pagination-center">
      <IconLink :disabled="!hasPrevPage" @click="moveToFirst">
        <SvgBase icon>
          <IconDoubleLeft></IconDoubleLeft>
        </SvgBase>
      </IconLink>
      <IconLink :disabled="!hasPrevPage" @click="moveToPrev">
        <SvgBase icon>
          <IconLeft></IconLeft>
        </SvgBase>
      </IconLink>

      <div class="pages">
        <IconLink
          v-for="(_, index) in new Array(totalPages)"
          :key="index"
          :class="{ 'curr-page': isCurrPage(index + 1) }"
          @click="moveToPage(index + 1)"
        >
          {{ index + 1 }}
        </IconLink>
      </div>

      <IconLink :disabled="!hasNextPage" @click="moveToNext">
        <SvgBase icon>
          <IconRight></IconRight>
        </SvgBase>
      </IconLink>
      <IconLink :disabled="!hasNextPage" @click="moveToLast">
        <SvgBase icon>
          <IconDoubleRight></IconDoubleRight>
        </SvgBase>
      </IconLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 15,
    },
  },
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currPage() {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage() {
      return this.currPage > 1 ? this.currPage - 1 : 1
    },
    nextPage() {
      return this.currPage < this.totalPages
        ? this.currPage + 1
        : this.totalPages
    },
    hasPrevPage() {
      return this.currPage !== 1
    },
    hasNextPage() {
      return this.currPage !== this.totalPages
    },
  },
  mounted() {
    this.page = this.currPage
  },
  methods: {
    onKeydown({ target, key }) {
      if (key !== 'Enter') return
      if (target.value > this.totalPages || target.value < 1) {
        this.page = this.currPage
      } else if (target.value !== this.currPage) {
        this.$router.push(`/posts/page/${target.value}`)
      }
    },
    onBlur({ target }) {
      if (target.value > this.totalPages || target.value < 1) {
        this.page = this.currPage
      }
    },
    moveToFirst() {
      if (this.hasPrevPage) this.$router.push('/posts/page/1')
    },
    moveToPrev() {
      if (this.hasPrevPage) this.$router.push(`/posts/page/${this.prevPage}`)
    },
    moveToNext() {
      if (this.hasNextPage) this.$router.push(`/posts/page/${this.nextPage}`)
    },
    moveToLast() {
      if (this.hasNextPage) this.$router.push(`/posts/page/${this.totalPages}`)
    },
    moveToPage(page) {
      this.$router.push(`/posts/page/${page}`)
    },
    isCurrPage(page) {
      return this.currPage === page
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
}
.pagination-center {
  display: flex;
  justify-content: space-between;
}
.pages {
  display: flex;
  font-size: 1.25em;
}
.curr-page {
  border: 2px solid $color-primary;

  &:hover {
    border: 2px solid $color-primary;
  }
}
.dark-mode {
  .curr-page {
    border: 2px solid $color-secondary;

    &:hover {
      border: 2px solid $color-secondary;
    }
  }
}
</style>
