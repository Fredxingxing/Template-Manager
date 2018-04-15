// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//从node_moduls取框架
import App from './App'  //= var App=require('./App')
import router from './router'
import axios from 'axios'

Vue.prototype.$axios=axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },//注册app成组件，只有注册了才能在app.vue里面使用
  template: '<App/>',

})
