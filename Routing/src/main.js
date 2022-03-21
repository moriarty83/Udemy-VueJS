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

const checkAuth = ()=>{
    const isAuth = true;
    if(!isAuth) return '/contact'
}

const isAdmin = ()=>{
    const isAdmin = true;
    if(!isAdmin) return '/contact'
}

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/articles', component: Articles,
            beforeEnter:[checkAuth, isAdmin]
        // children:[
        //     {path: ':id', component: Article, props:{crazy: 'horse'}},
        // ]
    },
        {path: '/articles/:id', component: Article, props:{crazy: 'horse'}},
        {path: '/contact', meta:{ checkAuth: true}, components: {
            default: Contact,
            notify: Notify, 
            }, name:'reachme'},
        //{path: '/contact', redirect: '/'},

        {path: '/', component: Home},
        {path: '/:notFound(.*)', component: NotFound}
        
    ],
    linkActiveClass:'active'
});

routes.beforeEach((to, from, next)=>{
    if(to.meta.checkAuth){
        // Do auth check
    }
    console.log(from)
    return next()
})

// routes.beforeEach((to, from, next)=>{
//     // Addtional arguments include from & next.
//     console.log("Before Each running")
//     console.log(from)
//     // Do checking/authenticating etc.
//     let isAuth = false;
//     if(to.path === '/'){
//         next()
//     }
//     else {
//         if(to.path !== '/contact' && !isAuth) return next({
//         path: '/contact'
//     })
//     return next()}
// })

app.component('app-header',Header);
app.component('app-footer',Footer);

app.use(routes);
app.mount('#app')
