import axios from 'axios'

const UserModule = {
    namespaced: true,
    state(){
        return{
            name: 'Francis',
        }
    },
    actions:{

        signup(context,payload){
            const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_KEY}`
            // const reqPayload = {
            //     email: payload.email,
            //     password: payload.password,
            //     returnSecureToken: true
            // }
            axios.post(url, {...payload, returnSecureToken: true})
            .then (response => {
                console.log(response.data)
            })
            .catch ( error => console.log(error))
        }
    }
}

export default UserModule