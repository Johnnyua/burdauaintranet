import { createStore } from "vuex";
import { languageModule } from "./languageModule";

export default createStore({
  modules: {
    currentLanguage: languageModule,
  },
});
