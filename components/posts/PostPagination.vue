<template>
  <div class="pagination-container">
    <div class="pagination-center">
      <IconLink :disabled="!hasPrevPage" @click="moveToFirst">
        <SvgBase icon>
          <IconLastLeft></IconLastLeft>
        </SvgBase>
      </IconLink>
      <IconLink :disabled="!hasPrevPages" @click="moveToPrevPages">
        <SvgBase icon>
          <IconDoubleLeft></IconDoubleLeft>
        </SvgBase>
      </IconLink>
      <IconLink :disabled="!hasPrevPage" @click="moveToPrevPage">
        <SvgBase icon>
          <IconLeft></IconLeft>
        </SvgBase>
      </IconLink>

      <div class="pages">
        <IconLink
          v-for="pageNum in getPageRange()"
          :key="pageNum"
          :class="{ 'curr-page': isCurrPage(pageNum) }"
          @click="moveToPage(pageNum)"
        >
          {{ pageNum }}
        </IconLink>
      </div>

      <IconLink :disabled="!hasNextPage" @click="moveToNextPage">
        <SvgBase icon>
          <IconRight></IconRight>
        </SvgBase>
      </IconLink>
      <IconLink :disabled="!hasNextPages" @click="moveToNextPages">
        <SvgBase icon>
          <IconDoubleRight></IconDoubleRight>
        </SvgBase>
      </IconLink>
      <IconLink :disabled="!hasNextPage" @click="moveToLast">
        <SvgBase icon>
          <IconLastRight></IconLastRight>
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
      pageUnit: 10,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    prevPage() {
      return this.page > 1 ? this.page - 1 : 1
    },
    nextPage() {
      return this.page < this.totalPages ? this.page + 1 : this.totalPages
    },
    hasPrevPage() {
      return this.page !== 1
    },
    hasNextPage() {
      return this.page !== this.totalPages
    },
    hasPrevPages() {
      return Math.floor((this.page - 1) / this.pageUnit) > 0
    },
    hasNextPages() {
      return (
        Math.floor((this.page - 1) / this.pageUnit) <
        Math.floor(this.totalPages / this.pageUnit)
      )
    },
  },
  mounted() {
    this.page = parseInt(this.$route.params.page) || 1
  },
  methods: {
    moveToFirst() {
      if (this.hasPrevPage) this.$router.push('/posts/page/1')
    },
    moveToPrevPage() {
      if (this.hasPrevPage) this.$router.push(`/posts/page/${this.prevPage}`)
    },
    moveToPrevPages() {
      const prevLastPage =
        Math.floor((this.page - 1) / this.pageUnit) * this.pageUnit
      this.$router.push(`/posts/page/${prevLastPage}`)
    },
    moveToNextPage() {
      if (this.hasNextPage) this.$router.push(`/posts/page/${this.nextPage}`)
    },
    moveToNextPages() {
      const nextFirstPage =
        Math.floor((this.page - 1) / this.pageUnit + 1) * this.pageUnit + 1
      this.$router.push(`/posts/page/${nextFirstPage}`)
    },
    moveToLast() {
      if (this.hasNextPage) this.$router.push(`/posts/page/${this.totalPages}`)
    },
    moveToPage(page) {
      this.$router.push(`/posts/page/${page}`)
    },
    isCurrPage(page) {
      return this.page === page
    },
    getPageRange() {
      // 화면에 보여지는 페이지 숫자들을 배열로 리턴
      const lastPrevPage =
        Math.floor((this.page - 1) / this.pageUnit) * this.pageUnit
      const visiblePageNums =
        this.totalPages - lastPrevPage > this.pageUnit
          ? this.pageUnit
          : this.totalPages - lastPrevPage

      return new Array(visiblePageNums)
        .fill(0)
        .map((_, index) => lastPrevPage + index + 1)
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
