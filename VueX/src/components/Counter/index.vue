<template>

<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">{{ $store.getters['counter/getCount']}}</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <button 
          type="button" 
          class="btn btn-primary btn-lg px-4 gap-3"
        @click="add()">+</button>
        <button 
          type="button" 
          class="btn btn-outline-secondary btn-lg px-4"
          @click="subtract()"
        >-</button>
        <button class="btn btn-secondary btn-lg" @click="$store.getters['counter/getPrize']">Get Prize</button>

      </div>
    </div>
  </div>

</template>


<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters('counter',{
      prize: 'getPrize'
    }),
    counterValue(){
      return this.$store.getters['counter/getCount']
    },
    // prize(){
    //   return this.$store.getters['counter/getPrize'];
    // }
  },
  methods:{
    ...mapMutations('counter',['add', 'subtract']),
    // add(){
    //   this.$store.state.counter += 1
    // },
    // subtract(){
    //   this.$store.state.counter -= 1
    // },
    getPrize(){
      const obj = this.prize;
      alert("Prize: " + obj.prize + " In: " + obj.attempts)
    },
  },
}
</script>