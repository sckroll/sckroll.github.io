<template>
  <section class="about" :class="sectionName">
    <div class="left">
      <h2>
        <template v-if="brace">
          <slot name="before-brace"></slot>
          <span class="brace">${</span>
          <span class="brace-content"><slot name="brace-content"></slot></span>
          <span class="brace">}</span>
          <slot name="after-brace"></slot>
        </template>
        <template v-else>
          <slot name="title"></slot>
        </template>
      </h2>
    </div>
    <div class="right">
      <slot name="custom-content">
        <nuxt-content :document="content" />
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionName: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      default: () => {},
    },
    brace: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@include set-viewpoint;

section {
  &.about {
    display: flex;
    padding: 64px 32px;
    box-sizing: border-box;

    .left {
      flex: 2;
    }
    .right {
      flex: 3;
      border-left: 3px solid $sckroll-grey-4;
      padding-left: 32px;
    }
  }
}
h2 {
  margin-left: 16px;
  font-size: 1.75em;
  line-height: 150%;
  text-indent: -16px;
  white-space: pre-wrap;
}
.brace {
  color: $sckroll-secondary;
}
.brace-content {
  color: $sckroll-primary;
}

@include viewpoint-xl {
  section {
    width: $breakpoint-xl;
  }
}
@include viewpoint-lg {
  section {
    width: $breakpoint-lg;
  }
}
@include viewpoint-md {
  section {
    width: $breakpoint-md;
  }
}
@include viewpoint-sm {
  section {
    width: $breakpoint-sm;
  }
}
@include viewpoint-xs {
  section {
    width: 100%;
  }
}
</style>
