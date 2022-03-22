const authModule = {
    namespaced: true,
    state(){
        return{
            auth: true,
        }
    },
    // Mutations are Synchronous
    mutations:{
        setAuth(state, payload){
            state.auth = payload.value;
        }
    },
    // Actions can be async but can't mutate the store
    actions:{
        setAuth(context){
            console.log(context)
            context.commit('add', null, {root:true})
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
        isAuthUser(state){
            return state.auth
        }
    }
}

export default authModule