export const isDarkMode = () => {
  const { matches } = window.matchMedia('(prefer-color-scheme: dark)')

  const isStorageValueDark =
    localStorage.getItem('sckroll-dark-mode') === 'true'
  const isOSValueDark = matches && !localStorage.getItem('sckroll-dark-mode')
  return isStorageValueDark || isOSValueDark
}

export const toggleDarkMode = newState => {
  const colorMode = newState ? 'dark' : 'light'
  document.documentElement.setAttribute('color-mode', colorMode)
  localStorage.setItem('sckroll-dark-mode', newState)
}
