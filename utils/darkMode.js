export const isDarkMode = () => {
  const { matches } = window.matchMedia('(prefers-color-scheme: dark)')

  const isStorageValueDark =
    localStorage.getItem('sckroll-dark-mode') === 'true'
  const isOSValueDark = matches && !localStorage.getItem('sckroll-dark-mode')
  return isStorageValueDark || isOSValueDark
}
