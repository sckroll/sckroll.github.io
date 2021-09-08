<template>
  <div class="pagination-container">
    <div class="pagination-center">
      <span v-if="currPage === 1" class="pagination-button disabled">
        <fa-icon :icon="['fa', 'angle-double-left']" />
      </span>
      <nuxt-link v-else :to="`/posts/page/1`" class="pagination-button">
        <fa-icon :icon="['fa', 'angle-double-left']" />
      </nuxt-link>

      <span v-if="currPage === 1" class="pagination-button disabled">
        <fa-icon :icon="['fa', 'angle-left']" />
      </span>
      <nuxt-link
        v-else
        :to="`/posts/page/${prevPage}`"
        class="pagination-button"
      >
        <fa-icon :icon="['fa', 'angle-left']" />
      </nuxt-link>

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

      <span v-if="currPage === totalPages" class="pagination-button disabled">
        <fa-icon :icon="['fa', 'angle-right']" />
      </span>
      <nuxt-link
        v-else
        :to="`/posts/page/${nextPage}`"
        class="pagination-button"
      >
        <fa-icon :icon="['fa', 'angle-right']" />
      </nuxt-link>

      <span v-if="currPage === totalPages" class="pagination-button disabled">
        <fa-icon :icon="['fa', 'angle-double-right']" />
      </span>
      <nuxt-link
        v-else
        :to="`/posts/page/${totalPages}`"
        class="pagination-button"
      >
        <fa-icon :icon="['fa', 'angle-double-right']" />
      </nuxt-link>
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
      default: 12,
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
  },
}
</script>

<style lang="scss" scoped>
.pagination-container {
  margin-top: 32px;
  padding: 0 32px;
  display: flex;
  justify-content: center;
}
.pagination-center {
  width: 256px;
  display: flex;
  justify-content: space-between;
}
.pagination-button {
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: $sckroll-grey-2;
  transition: $fade-default;

  &:hover {
    color: $sckroll-primary;
    transition: $fade-default;
  }
  &.disabled {
    cursor: default;
    color: $sckroll-grey-5;
  }
}
.input-area {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 16px;
    border: none;
    border-bottom: 3px solid $sckroll-grey-4;
    margin-right: 4px;
    padding: 9px 0 2px;
    font-size: 1em;
    text-align: center;
    transition: $fade-default;

    &:hover {
      border-bottom: 3px solid $sckroll-primary;
      transition: $fade-default;
    }
    &:focus {
      outline: none;
      border-bottom: 3px solid $sckroll-primary;
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
</style>
