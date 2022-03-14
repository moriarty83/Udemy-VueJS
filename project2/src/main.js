import { createApp } from "vue";
import App from './App.vue'
import Header from './components/Header'
import Footer from './components/Footer'


const app = createApp(App);

app.component('app-header',Header)
app.component('app-footer', Footer)
app.mount('#app')