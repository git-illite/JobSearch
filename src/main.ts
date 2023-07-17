import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import router from "@/router";
import store, { key } from "@/store";

/* add icons to the library */
library.add(faSearch, faAngleDown, faAngleUp);

createApp(App)
  .use(store, key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
