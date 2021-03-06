// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入阿里图标、全局样式
import '../static/css/global.css'
import '../static/font/iconfont'

// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        num: 0
    },
    mutations:{
        addCartCount(state){
            state.num++
        },
        reduceCartCount(state){
            state.num--
        }
    }
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
