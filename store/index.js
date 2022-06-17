import { setMetaThemeColor } from '@/utils/metaThemeColor'

export const state = () => ({
  post: {},
  isErrorPage: false,
  isDarkMode: false,
  isScrolled: false,
  hasHeaderImage: false,
  isMobileMenuOpened: false,
  headerImage: '',
  perPage: 10,
})

export const mutations = {
  SET_POST(state, post) {
    state.post = post
  },
  CLEAR_POST(state) {
    state.post = {}
  },

  SET_ERROR_PAGE(state, isErrorPage) {
    state.isErrorPage = isErrorPage
  },
  SET_DARK_MODE(state, isDarkMode) {
    if (state.isDarkMode !== isDarkMode) {
      state.isDarkMode = isDarkMode
      setMetaThemeColor()
    }
  },

  SET_SCROLL_STATE(state, isScrolled) {
    state.isScrolled = isScrolled
  },
  SET_HEADER_IMAGE_STATE(state, hasHeaderImage) {
    state.hasHeaderImage = hasHeaderImage
  },
  SET_MOBILE_MENU_STATE(state, isMobileMenuOpened) {
    state.isMobileMenuOpened = isMobileMenuOpened
  },

  SET_HEADER_IMAGE(state, headerImage) {
    state.headerImage = headerImage
  },
  CLEAR_HEADER_IMAGE(state) {
    state.headerImage = ''
  },
}
