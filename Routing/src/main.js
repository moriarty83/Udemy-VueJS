import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Articles from './components/Articles'
import Contact from './components/Contact'
import Home from './components'
import Article from './components/Articles/article'
import NotFound from './components/404.vue'
import Notify from './components/notify.vue'


const app =  createApp(App);
const routes = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/articles', component: Articles, 
        // children:[
        //     {path: ':id', component: Article, props:{crazy: 'horse'}},
        // ]
    },
        {path: '/articles/:id', component: Article, props:{crazy: 'horse'}},
        {path: '/contact', components: {
            default: Contact,
            notify: Notify, 
            }, name:'reachme'},
        //{path: '/contact', redirect: '/'},

        {path: '/', component: Home},
        {path: '/:notFound(.*)', component: NotFound}
        
    ],
    linkActiveClass:'active'
})
app.component('app-header',Header);
app.component('app-footer',Footer);

app.use(routes);
app.mount('#app')
