import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Education from './views/Education.vue';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';
import Experience from './views/Experience.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/education',
            name: 'education',
            component: Education
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});
