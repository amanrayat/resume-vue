import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from '../../resume/src/router';
import vueSmoothScroll from 'vue-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
    created() {
        AOS.init();
    },
    router,
    render: h => h(App)
}).$mount('#app');
