export const setMetaThemeColor = () => {
  // 모바일 브라우저 상태바 색상 변경
  const metaThemeColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--color-meta-theme')

  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', metaThemeColor)
}
