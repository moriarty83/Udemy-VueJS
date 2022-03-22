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
            prizes: ["car", "guitar", "xbox", "nothing"],
            attempts: 0,
            auth: false,
        }
    },
    // Mutations are Synchronous
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
        setAuth(state, payload){
            state.auth = payload.value;
        }
    },
    // Actions can be async but can't mutate the store
    actions:{
        setAuth(context){
            setTimeout(()=>{
                context.commit('setAuth', {value: true})
            }, 500)
        },
        signOut(context, payload){
            setTimeout(()=>{
                context.commit('setAuth', {value: payload})
            }, 500)
        }
    },
    getters:{
        getCount(state){
          return state.counter
        },
        getPrize(state, getters){
            console.log("Getting prize")
            let prize = ''
            state.attempts ++
            for(let i=0; i < state.counter; i++)
            {
                prize = state.prizes[Math.floor(Math.random() * state.prizes.length)]
            }
            return {prize, attempts: getters.getAttempts}
        },
        getAttempts(state){
            return state.attempts
        }
      },
})

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(Router);
app.use(store);
app.mount('#app');
