export const setMetaThemeColor = () => {
  // 색상 변수 추출
  const metaThemeColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--color-meta-theme')

  // 모바일 브라우저 상태 바에 색상 적용
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', metaThemeColor)
}
