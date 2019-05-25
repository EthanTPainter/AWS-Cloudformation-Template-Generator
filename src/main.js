import Vue from "vue";
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from "./App.vue";

Vue.config.productionTip = false;

import { store } from "./store/store";

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app');