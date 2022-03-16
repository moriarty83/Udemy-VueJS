<template>
  <form @submit="checkForm">
    <div class="row">
      <div class="col-xl-12">
        <h1>Contact us</h1>
        <hr />

        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model.lazy="formData.name"
          />
        </div>

        <div class="form-group">
          <label for="email">email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model.lazy="formData.email"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            class="form-control"
            v-model.lazy="formData.subject"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            rows="3"
            id="message"
            v-model.lazy="formData.message"
          ></textarea>
        </div>


        <div class="form-group">
            <h5>Want more spam ? </h5>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Newsletter" id="newsletter" v-model="formData.extras">
                <label class="form-check-label" for="newsletter">
                    Newsletter
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Promotions" id="promotions" v-model="formData.extras">
                <label class="form-check-label" for="newsletter">
                    Promotions
                </label>
            </div>
         </div>

        <div class="form-group">
            <h5>What are you ? </h5>
            <div class="form-check">
                <input class="form-check-input" type="radio" id="human" value="human" name="origin" v-model="formData.species">
                <label class="form-check-label" for="human">
                    Human
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" id="alien" value="alien" name="origin" v-model="formData.species">
                <label class="form-check-label" for="alien">
                    Alien
                </label>
            </div>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <select class="form-control" id="country" v-model="formData.country">
            <option v-for="(country, index) in countries" :key="index+country" >
              {{country}}
            </option>
          </select>
        </div>
        <input type="submit" value="Submit" class="btn btn-primary"/>
       
      </div>
    </div>
    <p v-if="errors.length">{{this.errors}}</p>
  </form>
  
</template>

<script>

export default {
  data() {
    return{
      formData:{
      name:'',
      email:'',
      subject:'',
      message:'',
      extras:[],
      newsLetter: false,
      promotions: false,
      species: 'alien',
      country: 'India',
      },
      countries:["US", "India", "Brazil", "Russia"],
      errors:[],
    }
    
  },
  methods:{
    submitForm(){
      console.log(JSON.stringify(this.formData))
    },
    checkForm(e){
      e.preventDefault();
      this.errors = [];

      if(!this.formData.name){
        this.errors.push("Name is Required")

      }
      if(this.formData.species !== 'Alien'){
        this.errors.push("Humans cannot submit this form")
      }

      if(!this.errors.length){
        this.submitForm()
      }
      else{
        alert(this.errors)
      }
    }
  }
}
</script>
