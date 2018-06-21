// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//从node_moduls取框架
import App from './App'  //= var App=require('./App')
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import  ElementUI from 'element-ui'
import lodash from 'lodash'
import VueI18n from 'vue-i18n'
//Object.defineProperty(Vue.prototype,'$lodash',{value:lodash});
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$lodash=lodash
Vue.use(VueI18n)
const i18n=new VueI18n({
  locale:'zh-CN',//this.$i18n.locale来切换语言
  messages:{
    'zh-CN': require('./data/zh-CN'),
    'en-US': require('./data/en-US')
  }
})
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  axios,
  i18n,
  lodash,
  components: { App },//注册app成组件，只有注册了才能在app.vue里面使用
  template: '<App/>',

})
