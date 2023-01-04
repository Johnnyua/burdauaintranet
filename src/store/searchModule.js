export const searchModule = {
  state: () => ({
    text: "",
  }),
  getters: {},
  mutations: {
    setSearchText(state, text) {
      state.text = text;
    },
  },
  actions: {},
  namespaced: true,
};
