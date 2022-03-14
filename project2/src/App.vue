<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <comp-user-profile :aka="name" :age="age"></comp-user-profile>
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
                age: 38,
            }
        },
        components:{
            'comp-footer': Footer,
            compUserProfile,
        },
        methods:{
            updateAlias(){
                this.name = "Roy"
            }
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

