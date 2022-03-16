 /* eslint-disable */

import { createApp } from "vue";
import App from './App.vue'
import Header from './components/Header'
import Footer from './components/Footer'


const app = createApp(App);

app.directive('awesome',{
    created(el){
        console.log("created")

        console.log(el.parentNode)
    },

    beforeMount(el,binding,vnode){
        el.innerHTML = binding.value;
        // el.style.color = binding.arg;
        el.style.color  = binding.modifiers.red ? 'red' : binding.modifiers.blue ? 'blue' : 'black';
        el.style.fontSize = binding.modifiers.big ? '20px' : binding.modifiers.small ? '10px' : '15px'
    },
    mounted(el, vnode){
        console.log(el.parentNode)
        console.log(vnode)

    },
});
app.component('app-header',Header);
app.component('app-footer',Footer);
app.mount('#app');