// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import HeaderTop from './components/HeaderTop/HeaderTop.vue'

// 注册全局组件标签
Vue.component('HeaderTop', HeaderTop)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
   template: '<App/>'*/
  render: h => h(App),//映射app
  router,//设置路由器
  store
})
// 等同于
/* render: function (createElement) {
   return createElement(App)   // return '<App/>'
 } */
