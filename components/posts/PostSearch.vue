<template>
  <div class="search-input">
    <SvgBase icon>
      <IconSearch></IconSearch>
    </SvgBase>

    <SearchInput
      v-model="query"
      :placeholder="`검색할 포스트의 ${currField} 입력 후 엔터`"
      @enter="onEnter"
    ></SearchInput>

    <IconLink class="click-block" @click="toggleDropdown">
      <SvgBase icon class="click-block">
        <IconEllipsisMenu class="click-block"></IconEllipsisMenu>
      </SvgBase>
    </IconLink>
    <SearchDropdown
      v-model="dropdown"
      :items="fields"
      :selected="currField"
      @item-select="setCurrField"
    ></SearchDropdown>

    <IconLink @click="clear">
      <SvgBase icon>
        <IconUndo></IconUndo>
      </SvgBase>
    </IconLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      currField: '',
      fields: ['제목', '태그', '내용'],
      dropdown: false,
    }
  },
  mounted() {
    this.currField = this.fields[0]
  },
  methods: {
    onEnter() {},
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    clear() {
      this.query = ''
    },
    setCurrField(item) {
      this.currField = item
      this.clear()
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
</style>
