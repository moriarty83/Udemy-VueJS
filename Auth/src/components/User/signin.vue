<template>
    <div class="container">
       <div class="content sign">
          
          <form @submit.prevent="onSubmit">
            <h1>Sign in</h1>
           
              <div class="input_field">
                  <label>Email</label>
                  <input type="email" v-model="formdata.email"/>
              </div>

              <div class="input_field">
                  <label>Password</label>
                  <input type="password" v-model="formdata.password" />
              </div>
              
              <button>
                <span v-if="type">Sign In</span>
                <span v-else>Sign Up</span>
              </button>

              <div class="change_type" @click="type = !type">
                <span v-if="type">I want to Sign Up</span>
                <span v-else>I want to Sign In</span>
              </div>

          </form>

        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                type:true,// true: signin || false: signup
                formdata:{
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit () {
                if(this.type){
                    console.log("sign in")
                }
                else{
                    this.$store.dispatch('user/signup', this.formdata)
                    console.log("sign up")
                }
            }
        },
        mounted(){
            console.log(this.$store.state.user.name)
            console.log(process.env.VUE_APP_FIREBASE_KEY)
        },
    }
</script>
