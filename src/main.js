import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from '../../resume/src/router';
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
