<template>
  <section>
    <div>TIL LIST</div>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  flex: 1;
}

@include viewpoint-xl {
}
@include viewpoint-lg {
}
@include viewpoint-md {
}
@include viewpoint-sm {
}
@include viewpoint-xs {
}
</style>
