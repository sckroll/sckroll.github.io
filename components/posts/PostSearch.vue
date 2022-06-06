<template>
  <div class="search-input">
    <SvgBase icon>
      <IconSearch></IconSearch>
    </SvgBase>

    <SearchInput
      v-model.trim="query"
      :placeholder="`검색할 포스트의 ${fieldKor} 입력 후 엔터`"
      @enter="onEnter"
    ></SearchInput>

    <IconLink class="click-block" responsive @click="toggleDropdown">
      <SvgBase icon class="click-block">
        <IconEllipsisMenu class="click-block"></IconEllipsisMenu>
      </SvgBase>
    </IconLink>
    <SearchDropdown
      v-model="dropdown"
      :items="fields"
      :selected="field"
      @item-select="setField"
    ></SearchDropdown>

    <IconLink responsive @click="clear">
      <SvgBase icon>
        <IconUndo></IconUndo>
      </SvgBase>
    </IconLink>
  </div>
</template>

<script>
export default {
  props: {
    initialQuery: {
      type: String,
      default: '',
    },
    initialField: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      query: '',
      field: '',
      fieldKor: '',
      fields: [
        {
          name: '제목',
          value: 'title',
        },
        {
          name: '태그',
          value: 'tags',
        },
        {
          name: '내용',
          value: 'text',
        },
      ],
      dropdown: false,
    }
  },
  watch: {
    initialQuery: {
      immediate: true,
      handler(val) {
        this.query = val
      },
    },
    initialField: {
      immediate: true,
      handler(val) {
        this.field = val || this.fields[0].value
        this.getFieldKor()
      },
    },
  },
  methods: {
    onEnter() {
      if (!this.query) return

      this.$router.push(`/posts/search?q=${this.query}&field=${this.field}`)
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    clear() {
      this.query = ''
      this.$router.push('/posts/search')
    },
    setField(item) {
      this.field = item.value
      this.fieldKor = item.name
      this.query = ''
    },
    getFieldKor() {
      if (this.field === 'tags') this.fieldKor = '태그'
      else if (this.field === 'text') this.fieldKor = '내용'
      else this.fieldKor = '제목'
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  margin: 0 8px 0 16px;
  width: 384px;
}
.search-input {
  display: flex;
  align-items: center;
}

@include viewpoint-lg {
  input {
    width: 256px;
  }
}
@include viewpoint-md {
  .search-input {
    width: 100%;
  }
}
@include viewpoint-sm {
  .search-input {
    width: 100%;
  }
  input {
    width: calc(100% - 96px);
  }
}
@include viewpoint-xs {
  .search-input {
    width: 100%;
  }
  input {
    width: calc(100% - 96px);
  }
}
</style>
