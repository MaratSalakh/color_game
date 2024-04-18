import { createStore } from "vuex";
import { MainPageModule } from "./mainPageModule";

export default createStore({
  modules: {
    main: MainPageModule,
  },
});
