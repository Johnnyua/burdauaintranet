import { createApp } from "vue";
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

app.config.globalProperties.lan = localStorage.getItem("lang") || 'ua';

app
    .use(store)
    .use(router)
    .mount("#app");
