<template>
    <div v-show="loading">
        <app-loader></app-loader>
    </div>
    <div v-show="!loading">
    <h2>Add users</h2>
        
        <div class="form-group">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>
        </div>
</template>

<script>
import axios from 'axios';

export default {
        data(){
            return{
                user:{ 
                    name:'',
                    lastname:'',
                },
                loading: false,
            }
        },
        methods:{
            submit(){
                this.loading = true
                axios({
                    method: 'post',
                    url: 'http://localhost:3004/users',
                    data: this.user
                })
                .then(response =>{
                    
                    this.$toast.success("User Added",{
                    position: 'bottom',
                    duration: 2000,
                })
                })
                .catch (error => {console.log(error)})
                .finally(()=>{this.loading = false})
            }
        }
}
</script>