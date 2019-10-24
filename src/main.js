// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Mint-ui
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

// 引入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/iconsExtra.css'

// 引入全局样式
import './style/main.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})