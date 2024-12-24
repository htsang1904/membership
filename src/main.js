import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.scss'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import * as VueGoogleMaps from "vue2-google-maps"
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Flicking);

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
