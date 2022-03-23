import {createStore} from 'vuex';
import UserModule from './Users/user_module';

const store = createStore({
    modules:{
        user: UserModule,
    }
})

export default store;