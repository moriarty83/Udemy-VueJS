const app = Vue.createApp({
    data(){
        return{
            state: true,
            inputName: "",
            names: [],
        }
    },

    methods:{
        addNameToList(){
            const userName = this.inputName;
            if(this.validate(userName)){
                this.names.push(userName)
                this.inpuName = ""
                console.log(this.names)
            }
            else{
                console.log("error")

            }
        },
        validate(name){
            return true
        }
    }
}).mount('#app')