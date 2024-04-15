import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/shop",
    component: PostsPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
