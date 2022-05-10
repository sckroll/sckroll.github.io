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

      <span class="input-area">
        <input
          v-model="page"
          type="number"
          class="page-input"
          min="1"
          :max="totalPages"
          @keydown="onKeydown"
          @blur="onBlur"
        />
        /
        {{ totalPages }}
      </span>

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
  },
}
</script>

<style lang="scss" scoped>
.pagination-container {
  /* padding: 0 32px; */
  display: flex;
  justify-content: center;
}
.pagination-center {
  width: 256px;
  display: flex;
  justify-content: space-between;
}
.input-area {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 16px;
    border: none;
    border-bottom: 3px solid $color-grey-600;
    margin-right: 4px;
    padding: 9px 0 2px;
    font-size: 1em;
    text-align: center;
    background-color: transparent;
    caret-color: black;
    color: black;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
    &:focus {
      outline: none;
      border-bottom: 3px solid $color-primary;
      transition: $fade-default;
    }
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
}
.dark-mode .input-area {
  input {
    border-bottom: 3px solid $color-grey-300;
    caret-color: white;
    color: white;
  }
}
</style>
