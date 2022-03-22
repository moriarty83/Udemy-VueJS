import { createStore } from "vuex";
import authModule from "./admin";
import counterModule from "./counter";

const store = createStore({
    modules:{
        admin: authModule,
        counter: counterModule
    }
})

export default store