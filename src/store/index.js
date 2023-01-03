import { createStore } from "vuex";
import { languageModule } from "./languageModule";
import { searchText } from "./searchText";

export default createStore({
  modules: {
    currentLanguage: languageModule,
    searchText: searchText,
  },
});
