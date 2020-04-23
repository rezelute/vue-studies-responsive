import Vue from "vue";
import App from "./App.vue";
import VueMq from "vue-mq";
import Fragment from "vue-fragment";

Vue.config.productionTip = false

// plugin could be used to show/hide vue components based on breakpoints
Vue.use(VueMq, {
  breakpoints: {
    sm: 500,
    md: 1250,
    lg: Infinity,
  }
});

// React fragment alternative in Vue
Vue.use(Fragment.Plugin);

new Vue({
  render: h => h(App),
}).$mount("#app");