import { createStore } from "vuex";
import { languageModule } from "./languageModule";
import { searchModule } from "./searchModule";

export default createStore({
  modules: {
    currentLanguage: languageModule,
    search: searchModule,
  },
});
