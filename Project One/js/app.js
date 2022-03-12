const app = Vue.createApp({
    data(){
        return{
            state: true,
            inputName: "",
            names: [],
            error: "error text",
            showError: false,
        }
    },

    computed:{
        isReady(){
            return this.names.length > 1 ? true : false
        }
    },

    methods:{
        addNameToList(){
            const userName = this.inputName;
            if(this.validate(userName)){
                this.names.push(userName)
                this.inputName = ""
                console.log(this.names)
            }
            else{
                console.log("error")

            }
        },
        validate(name){
            this.error = "";
            this.showError = false;
            if(name.length < 1){
                this.error = "You must enter a name";
                this.showError = true;
                return false
            }
            if(this.names.includes(name)){
                this.error = "Names must be unique"
                this.showError = true;
                return false
            }
            
            return true
        },
        removeName(index){
            this.names.splice(index, 1)
        },
        showResults(){
            this.state = false;
        }
    }
}).mount('#app')







