<template>
  <div class="pagination-container">
    <div class="pagination-center">
      <div class="pagination-center-desktop">
        <IconLink :disabled="!hasPrevPage" responsive @click="moveToFirst">
          <SvgBase
            icon
            :width="isMobile ? 24 : 32"
            :height="isMobile ? 24 : 32"
          >
            <IconLastLeft></IconLastLeft>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasPrevPages" responsive @click="moveToPrevPages">
          <SvgBase
            icon
            :width="isMobile ? 24 : 32"
            :height="isMobile ? 24 : 32"
          >
            <IconDoubleLeft></IconDoubleLeft>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasPrevPage" responsive @click="moveToPrevPage">
          <SvgBase
            icon
            :width="isMobile ? 24 : 32"
            :height="isMobile ? 24 : 32"
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
            :width="isMobile ? 24 : 32"
            :height="isMobile ? 24 : 32"
          >
            <IconRight></IconRight>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasNextPages" responsive @click="moveToNextPages">
          <SvgBase
            icon
            :width="isMobile ? 24 : 32"
            :height="isMobile ? 24 : 32"
          >
            <IconDoubleRight></IconDoubleRight>
          </SvgBase>
        </IconLink>
        <IconLink :disabled="!hasNextPage" responsive @click="moveToLast">
          <SvgBase
            icon
            :width="isMobile ? 24 : 32"
            :height="isMobile ? 24 : 32"
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
import { breakpointLg, breakpointMd } from '@/assets/scss/main.scss'

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
      isMobile: false,
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
    this.page = parseInt(this.$route.query.page) || 1

    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth > parseInt(breakpointLg.replace('px', ''))) {
        this.pageUnit = 10
        this.isMobile = false
      } else if (window.innerWidth > parseInt(breakpointMd.replace('px', ''))) {
        this.pageUnit = 10
        this.isMobile = true
      } else {
        this.pageUnit = 5
        this.isMobile = true
      }
    },
    moveToFirst() {
      if (this.hasPrevPage) {
        this.$router.push('/posts?page=1')
        this.page = 1
      }
    },
    moveToPrevPage() {
      if (this.hasPrevPage) {
        this.$router.push(`/posts?page=${this.prevPage}`)
        this.page = this.prevPage
      }
    },
    moveToPrevPages() {
      const prevLastPage =
        Math.floor((this.page - 1) / this.pageUnit) * this.pageUnit
      this.$router.push(`/posts?page=${prevLastPage}`)
      this.page = prevLastPage
    },
    moveToNextPage() {
      if (this.hasNextPage) {
        this.$router.push(`/posts?page=${this.nextPage}`)
        this.page = this.nextPage
      }
    },
    moveToNextPages() {
      const nextFirstPage =
        Math.floor((this.page - 1) / this.pageUnit + 1) * this.pageUnit + 1
      this.$router.push(`/posts?page=${nextFirstPage}`)
      this.page = this.nextFirstPage
    },
    moveToLast() {
      if (this.hasNextPage) {
        this.$router.push(`/posts?page=${this.totalPages}`)
        this.page = this.totalPages
      }
    },
    moveToPage(page) {
      this.$router.push(`/posts?page=${page}`)
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
  margin-top: 32px;
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
      /* display: none; */
      font-size: 1em;
    }
  }
  /* .pagination-center-mobile {
    display: flex;
    justify-content: space-between;
  } */
}
@include viewpoint-sm {
  .pagination-center-desktop {
    .pages {
      /* display: none; */
      font-size: 1em;
    }
  }
  /* .pagination-center-mobile {
    display: flex;
    justify-content: space-between;
  } */
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
