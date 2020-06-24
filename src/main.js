import Vue from "vue";

import "theme";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ApiService from "./common/api.service";

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
