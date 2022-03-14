<template>
    <div class="user_profile">
        <h3>User Information</h3>
        <ul>
            <li>Name: {{name}}</li>
            <li>aka: {{aka}}</li>
            <li>Age: {{age}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "comp-profile",
    props:['aka', 'age'],
    data(){
        return{
            name: "Bob"
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