export const languageModule = {
  state: () => ({
    locale: localStorage.getItem("lang") || "ua",
  }),
  getters: {},
  mutations: {},
  actions: {},
  namespaced: true,
};
