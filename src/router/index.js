import Vue from 'vue'
import Router from 'vue-router'

// 四个主体组件
import clxIndex from '@/components/clxIndex'
import clxSearch from '@/components/clxSearch'
import clxHuiyuan from '@/components/clxHuiyuan'
import clxBuycar from '@/components/clxBuycar'


Vue.use(Router)

export default new Router({

    // <router-link to="/clxHeader/clxRson" class="clxRsonA">子路由</router-link>
    //  <router-view></router-view>
    routes: [{
        path: '/',
        name: 'clxIndex',
        component: clxIndex
    }, {
        path: '/clxSearch',
        name: 'clxSearch',
        component: clxSearch
    }, {
        path: '/clxHuiyuan',
        name: 'clxHuiyuan',
        component: clxHuiyuan
    }, {
        path: '/clxBuycar',
        name: 'clxBuycar',
        component: clxBuycar
    }, ]
})