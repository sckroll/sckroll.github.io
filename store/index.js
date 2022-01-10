// import { toggleDarkMode } from '@/utils/darkMode'
import { setMetaThemeColor } from '@/utils/metaThemeColor'

export const state = () => ({
  isErrorPage: false,
  isDarkMode: false,
})

export const mutations = {
  SET_ERROR_PAGE(state, isErrorPage) {
    state.isErrorPage = isErrorPage
  },
  SET_DARK_MODE(state, isDarkMode) {
    if (state.isDarkMode !== isDarkMode) {
      state.isDarkMode = isDarkMode
      // toggleDarkMode(isDarkMode)
      setMetaThemeColor()
    }
  },
}
