import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VAS from 'vue-awesome-swiper'
Vue.use(VAS)
//全局加载swiper的css文件
import 'swiper/css/swiper.css'


// 配置axios
import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)


Vue.use(ElementUI);
Vue.config.productionTip = false




new Vue({
  router,
  store,
  data:{bus:new Vue()},
  render: h => h(App)
}).$mount('#app')
