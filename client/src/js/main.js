import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import App from './App.vue'
import routes from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
