import { createApp } from "vue";
import { ref } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import componentsUI from "@/components/UI";
import componentsGlobal from "@/components/global";
import components from "@/components/";
import directives from "@/directives";

import "@/assets/styles/style.css";

const app = createApp(App);
componentsUI.forEach((component) => {
  app.component(component.name, component);
});

componentsGlobal.forEach((component) => {
  app.component(component.name, component);
});

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// ================== Global variable for change language and translate ======================== \\
const lang = ref(localStorage.getItem("lang") || 'ua');
app.config.globalProperties.$lang = lang;
// ================== End ======================== \\

app
    .use(store)
    .use(router)
    .mount("#app");
