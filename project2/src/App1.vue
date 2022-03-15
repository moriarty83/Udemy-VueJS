<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <comp-user-profile 
                :lastName="lastName" 
                :aka="name" 
                :age="age" 
                :parents="parents"
                @update-lastname="lastName = $event"
                @say-hello="sayHello"
                :updateAge="updateAge"
                ></comp-user-profile>
            <button @click="updateAlias">Update alias</button>

        </div>
        <comp-footer></comp-footer>
    </div>
</template>
    
<script>
    import Footer from './components/Footer.vue';
    import compUserProfile from './components/User/profile'
    export default{
        
        data(){
            return{
                name: 'Chris',
                lastName: 'Jones',
                age: 38,
                parents: {
                    mom: "martha",
                    dad: "robert"
                }
            }
        },
        components:{
            'comp-footer': Footer,
            compUserProfile,
        },
        methods:{
            updateAlias(){
                this.name = "Roy"
            },
            sayHello(){
            alert("hello")
            },
            updateAge(value){
                this.age = value
            },
        }
    }

</script>

<style>
    body {
        font-family: "Roboto";
    }
    .container{
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }

</style>

