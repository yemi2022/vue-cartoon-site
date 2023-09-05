import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './index.css'
// import './style.css'

import App from './App.vue';
import IndexPage from './components/pages/IndexPage.vue';
import AboutUsPage from './components/pages/AboutUsPage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue';
import BigHeroPage from './components/pages/BigHeroPage.vue'
import CocoPage from "./components/pages/CocoPage.vue"
import MoanaPage from "./components/pages/MoanaPage.vue"
import MulanPage from "./components/pages/MulanPage.vue"
import ShrekPage from "./components/pages/ShrekPage.vue"
import ToyStoryPage from "./components/pages/ToyStoryPage.vue"
import FeedbackPage from "./components/pages/FeedbackPage.vue"



const routes = [
    {
        path: '/', 
        component: IndexPage,
    },
    {
        path: '/about', 
        component: AboutUsPage,
    },
    {
        path: '/contact', 
        component: ContactUsPage,
    },
    {
        path: '/bighero6', 
        component: BigHeroPage,
    },
    {
        path: '/coco', 
        component: CocoPage,
    },
    {
        path: '/moana', 
        component: MoanaPage,
    },
    {
        path: '/mulan', 
        component: MulanPage,
    },
    {
        path: '/shrek', 
        component: ShrekPage,
    },
    {
        path: '/toy-story', 
        component: ToyStoryPage,
    },
    {
        path: '/feedback', 
        component: FeedbackPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
