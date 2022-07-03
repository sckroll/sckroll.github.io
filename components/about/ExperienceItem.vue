<template>
  <div class="experience-item" :class="{ right }">
    <template v-if="exp">
      <div v-if="right" class="pointer-container">
        <SvgBase class="pointer" width="24" height="24" icon>
          <IconLeft></IconLeft>
        </SvgBase>
      </div>
      <div class="item-container" :class="{ right }">
        <div class="time">{{ exp.time }}</div>
        <div class="content">{{ exp.content }}</div>
      </div>
      <div v-if="!right" class="pointer-container">
        <SvgBase class="pointer" width="24" height="24" icon>
          <IconRight></IconRight>
        </SvgBase>
      </div>
    </template>
    <div v-else class="blank-item"></div>
  </div>
</template>

<script>
export default {
  props: {
    exp: {
      type: [Object, null],
      default: null,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.experience-item {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  &.right {
    justify-content: flex-start;
  }
}
.item-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 8px;

  &.right {
    align-items: flex-start;
    text-align: left;
  }
  .time {
    font-size: 1.25em;
    font-weight: 600;
  }
  .content {
    font-size: 1.1em;
  }
}
</style>
