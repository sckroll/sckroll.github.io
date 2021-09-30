<template>
  <section>
    <div>TIL CONTENT</div>
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
@include set-viewpoint;

section {
  flex: 3;
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
