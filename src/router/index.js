import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import Services from "@/pages/Services.vue";
import ToEmployee from "@/pages/ToEmployee.vue";
import Documents from "@/pages/Documents.vue";
import NewsId from "@/pages/NewsId.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/employee",
    name: "toEmployee",
    component: ToEmployee,
  },
  {
    path: "/documents",
    name: "documents",
    component: Documents,
  },
  {
    path: "/news:id",
    name: "newsid",
    component: NewsId,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
