import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Router from './routes';
import {createStore} from 'vuex'

const app =  createApp(App);

const store = createStore({
    state(){
        return{
            counter: 7,
        }
    },
    mutations:{
        add(state, payload){
            if(payload){state.counter += payload.value}
            else{
                state.counter ++;
            }
        },
        subtract(state, payload){
            if(payload){state.counter -= payload.value}
            else{
                state.counter --;
            }
        },
    }
})

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(Router);
app.use(store);
app.mount('#app');
