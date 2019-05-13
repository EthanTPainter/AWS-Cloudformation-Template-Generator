import Vue from "vue";
// import App from "./App.vue";
import TempApp from "./TempApp.vue"

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app');
new Vue({
  render: h => h(TempApp),
}).$mount('#app');