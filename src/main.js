import Vant from 'vant';
import 'vant/lib/index.css';
import Vue from 'vue';
import App from './App.vue';
import router from "./router.js"
import store from "./store/index"

Vue.config.productionTip = false
Vue.use(Vant);
import http from "@/utils/api.js"
Vue.prototype.$http = http;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')