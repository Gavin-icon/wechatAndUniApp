import App from './App'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from "uview-ui";
import UniNavBar from '@/components/uni-nav-bar/index.vue';
Vue.component('uni-nav-bar', UniNavBar)
import Login from '@/components/login/index.vue';
Vue.component('login', Login);
import gotoShare from '@/components/gotoShare/index.vue';
Vue.component('goto-share', gotoShare);
Vue.use(uView);
import store from '@/store/index.js';
const app = new Vue({
	...App,
	store
})
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
