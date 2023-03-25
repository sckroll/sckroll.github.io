<script setup lang="ts">
const router = useRoute()
const routeName = router.params.slug
</script>

<template>
  <div>
    {{ routeName }}
  </div>
</template>

<style lang="scss" scoped>

</style>