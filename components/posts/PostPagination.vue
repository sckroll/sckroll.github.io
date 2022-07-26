<template>
  <div class="pagination-container">
    <div class="pagination-center">
      <div class="pagination-center-desktop">
        <IconLink :disabled="!hasPrevPage" responsive @click="moveToFirst">
          <SvgBase
            icon
            :width="isTablet ? 24 : 32"
            :height="isTablet ? 24 : 32"
          >
            <IconLastLeft></IconLastLeft>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasPrevPages" responsive @click="moveToPrevPages">
          <SvgBase
            icon
            :width="isTablet ? 24 : 32"
            :height="isTablet ? 24 : 32"
          >
            <IconDoubleLeft></IconDoubleLeft>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasPrevPage" responsive @click="moveToPrevPage">
          <SvgBase
            icon
            :width="isTablet ? 24 : 32"
            :height="isTablet ? 24 : 32"
          >
            <IconLeft></IconLeft>
          </SvgBase>
        </IconLink>

        <div class="pages">
          <IconLink
            v-for="pageNum in getPageRange()"
            :key="pageNum"
            :class="{ 'curr-page': isCurrPage(pageNum) }"
            responsive
            @click="moveToPage(pageNum)"
          >
            {{ pageNum }}
          </IconLink>
        </div>

        <IconLink :disabled="!hasNextPage" responsive @click="moveToNextPage">
          <SvgBase
            icon
            :width="isTablet ? 24 : 32"
            :height="isTablet ? 24 : 32"
          >
            <IconRight></IconRight>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasNextPages" responsive @click="moveToNextPages">
          <SvgBase
            icon
            :width="isTablet ? 24 : 32"
            :height="isTablet ? 24 : 32"
          >
            <IconDoubleRight></IconDoubleRight>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasNextPage" responsive @click="moveToLast">
          <SvgBase
            icon
            :width="isTablet ? 24 : 32"
            :height="isTablet ? 24 : 32"
          >
            <IconLastRight></IconLastRight>
          </SvgBase>
        </IconLink>
      </div>
      <div class="pagination-center-mobile">
        <div class="pages">
          <IconLink
            v-for="pageNum in getPageRange()"
            :key="pageNum"
            :class="{ 'curr-page': isCurrPage(pageNum) }"
            responsive
            @click="moveToPage(pageNum)"
          >
            {{ pageNum }}
          </IconLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      page: 1,
      pageUnit: 10,
    }
  },
  computed: {
    ...mapState(['isTablet', 'isMobile']),
    pageFromQuery() {
      return this.$route.query.page || 1
    },
    perPage() {
      return this.$store.state.perPage
    },
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
    searchQuery() {
      if (this.$route.query.q && this.$route.query.field)
        return `q=${this.$route.query.q}&field=${this.$route.query.field}&`
      else return ''
    },
    searchPath() {
      return this.searchQuery ? '/search' : ''
    },
  },
  watch: {
    pageFromQuery: {
      immediate: true,
      handler(val) {
        this.page = parseInt(val)
      },
    },
    isMobile: {
      immediate: true,
      handler(val) {
        this.pageUnit = val ? 5 : 10
      },
    },
  },
  methods: {
    moveToFirst() {
      if (this.hasPrevPage) {
        this.$router.push(`/posts${this.searchPath}?${this.searchQuery}page=1`)
        this.page = 1
      }
    },
    moveToPrevPage() {
      if (this.hasPrevPage) {
        this.$router.push(
          `/posts${this.searchPath}?${this.searchQuery}page=${this.prevPage}`,
        )
        this.page = this.prevPage
      }
    },
    moveToPrevPages() {
      const prevLastPage =
        Math.floor((this.page - 1) / this.pageUnit) * this.pageUnit
      this.$router.push(
        `/posts${this.searchPath}?${this.searchQuery}page=${prevLastPage}`,
      )
      this.page = prevLastPage
    },
    moveToNextPage() {
      if (this.hasNextPage) {
        this.$router.push(
          `/posts${this.searchPath}?${this.searchQuery}page=${this.nextPage}`,
        )
        this.page = this.nextPage
      }
    },
    moveToNextPages() {
      const nextFirstPage =
        Math.floor((this.page - 1) / this.pageUnit + 1) * this.pageUnit + 1
      this.$router.push(
        `/posts${this.searchPath}?${this.searchQuery}page=${nextFirstPage}`,
      )
      this.page = this.nextFirstPage
    },
    moveToLast() {
      if (this.hasNextPage) {
        this.$router.push(
          `/posts${this.searchPath}?${this.searchQuery}page=${this.totalPages}`,
        )
        this.page = this.totalPages
      }
    },
    moveToPage(page) {
      this.$router.push(
        `/posts${this.searchPath}?${this.searchQuery}page=${page}`,
      )
      this.page = page
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
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.pagination-center-desktop {
  display: flex;
  justify-content: space-between;
}
.pagination-center-mobile {
  display: none;
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

@include viewpoint-md {
  .pagination-center-desktop {
    .pages {
      font-size: 1em;
    }
  }
}
@include viewpoint-sm {
  .pagination-center-desktop {
    .pages {
      font-size: 1em;
    }
  }
}
@include viewpoint-xs {
  .pagination-center-desktop {
    .pages {
      display: none;
    }
  }
  .pagination-center-mobile {
    display: flex;
    justify-content: space-between;

    .pages {
      font-size: 1em;
    }
  }
}
</style>
