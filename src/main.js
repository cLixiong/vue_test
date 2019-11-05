// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

// 引入 axios

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vue.prototype.$axios = axios
// 作用是我们每次发送的请求都会带一个/api的前缀
axios.defaults.baseURL = '/api'

// 阻止报错信息
Vue.config.productionTip = false

// 引入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/iconsExtra.css'

// 引入全局初始化样式
import './style/main.css';

// 引入animate动画
import './lib/animate/css/animate.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})