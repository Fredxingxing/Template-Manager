// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//从node_moduls取框架
import App from './App'  //= var App=require('./App')
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import  ElementUI from 'element-ui'
import lodash from 'lodash'
//Object.defineProperty(Vue.prototype,'$lodash',{value:lodash});
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$lodash=lodash
// Vue.use(lodash,'$lodash')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  axios,
  lodash,
  components: { App },//注册app成组件，只有注册了才能在app.vue里面使用
  template: '<App/>',

})
