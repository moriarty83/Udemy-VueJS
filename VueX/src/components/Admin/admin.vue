<template>
    <div class="row">
      <h1>Admin</h1>
      <hr />
      <div class="col-sm-5">
        <p>
          <strong>
          Change count:{{this.$store.getters['counter/getCount']}}
          </strong>
        </p>

        <div>
          <label class="form-label">By how much</label>
          <input 
            type="number" 
            class="form-control" 
            v-model="amount"
          >
        </div>
        <br/>

        <button type="button" class="btn btn-primary" @click="adminAdd({value: this.amount})">
          +
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="adminSubtract({value: this.amount})">
          -
        </button>
      </div>
    </div>
</template>


<script>
import {mapMutations} from 'vuex';
export default {

    data(){
      return {
        amount:1
      }
    },
    methods:{
      ...mapMutations('admin', {
        adminAdd: 'add',
        adminSubtract: 'subtract'
      }),
      // adminAdd(){
      //   this.$store.commit({
      //     type: 'add', 
      //     value:this.amount})
      // },
      // adminSubtract(){
      //   this.$store.commit('subtract', {value:this.amount})

      // },
    },

}
</script>