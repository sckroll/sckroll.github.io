<template>
  <div class="logo-container">
    <SvgBase :width="102" :height="24">
      <LogoText></LogoText>
    </SvgBase>
    <SvgBase>
      <IconLogo></IconLogo>
    </SvgBase>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  gap: 24px;
  align-items: center;
}
</style>
