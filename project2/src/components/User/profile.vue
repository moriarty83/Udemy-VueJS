<template>
    <div class="user_profile">
        <h3>User Information</h3>
        <ul>
            <li>Name: {{name}} {{lastName}}</li>
            
            <li>aka: {{aka}}</li>
            <li>Age: {{age}}</li>
            <button @click="updateAge(40)">Update Age</button>
        </ul>
        <ul>
            <li>Parents</li>
            <li v-for="(value, key, index) in parents" :key="index" @click="hello">
                {{value}} {{key}}
            </li>

        </ul>
        <button @click="updateLastName">Update Last Name</button>
    </div>
</template>

<script>

export default {
    name: "comp-profile",
    props:{
        aka: String,
        lastName: String,
        age: Number,
        parents: Object,
        updateAge: Function
    },
    data(){
        return{
            name: "Bob"
        }
    },
    methods:{
        updateLastName(){
            this.$emit('update-lastname','Michaelson')
        },
        hello(){
            this.$emit('say-hello')
        }
        
    }
}
</script>

<style scoped>
    .user_profile{
        font-weight: 800;
        border: 4px solid lightblue;
        padding: 10px;
    }
</style>