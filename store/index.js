export const state = () => ({
  isErrorPage: false,
})

export const mutations = {
  SET_ERROR_PAGE(state, isErrorPage) {
    state.isErrorPage = isErrorPage
  },
}
