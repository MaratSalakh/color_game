import { createApp } from "vue";
import App from "./App.vue";

import components from "./components/UI/index";

import router from "@/router/router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).mount("#app");
