import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({

    // <router-link to="/clxHeader/clxRson" class="clxRsonA">子路由</router-link>
    //  <router-view></router-view>
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})