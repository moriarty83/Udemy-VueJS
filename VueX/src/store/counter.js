const counterModule = {
    namespaced: true,
    state(){
        return{
            counter: 7,
            prizes: ["car", "guitar", "xbox", "nothing"],
            attempts: 0,
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
    },
    getters:{
        getCount(state, getters, rootState, rootGetters){
            console.log(rootState.admin.auth)
            console.log(rootGetters)
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
}

export default counterModule