<template>
  <section class="prev-next-nav">
    <div class="wrapper">
      <span class="post-link">
        <SvgBase icon :class="{ disabled: !next }">
          <IconLeft></IconLeft>
        </SvgBase>
        <TextLink v-if="next" :to="next.slug">
          다음 | {{ next.title }}
        </TextLink>
        <span v-else class="post-empty">다음 포스트가 없습니다.</span>
      </span>
      <span class="post-link">
        <TextLink v-if="prev" :to="prev.slug">
          {{ prev.title }} | 이전
        </TextLink>
        <span v-else class="post-empty">이전 포스트가 없습니다.</span>
        <SvgBase icon :class="{ disabled: !prev }">
          <IconRight></IconRight>
        </SvgBase>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.prev-next-nav {
  display: flex;
  justify-content: center;
}
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  font-size: 1.25em;
}
.post-link {
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    margin-bottom: 2px;

    &.disabled {
      fill: $color-grey-500;
    }
  }
  .post-empty {
    color: $color-grey-500;
  }
  &:last-of-type {
    justify-content: flex-end;
  }
}

@include viewpoint-md {
  .wrapper {
    flex-direction: column;
  }
}
@include viewpoint-sm {
  .wrapper {
    flex-direction: column;
    font-size: 1.1em;
  }
}
@include viewpoint-xs {
  .wrapper {
    flex-direction: column;
    font-size: 1.1em;
    width: 100%;
  }
}
</style>
