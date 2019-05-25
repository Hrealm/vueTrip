import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'

import One from '../components/one'
import Two from '../components/two'
import Three from '../components/three'
import Me from '../components/me'

//导入插件axios 挂载属性 vue.prototype
import Axios from 'axios'
Vue.prototype.$ajax = Axios


// 安装mint-ui组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.use(Router)

export default new Router({
    linkActiveClass: 'tbActive',   //激活class
    routes: [
        {
            path: '/',
            redirect: { name: 'index' }
        },
        {
            path: '/ ',
            name: 'index',
            component: Index
        },
        {
            path: '/two',
            name: 'two',
            component: Two
        },
        {
            path: '/three',
            name: 'three',
            component: Three
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
    ]
})
