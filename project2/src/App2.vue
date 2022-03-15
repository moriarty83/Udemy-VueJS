<template>
<div>
    <app-header></app-header>
    <div class="container">
        <comp-cars></comp-cars>
    </div>
</div>

    
</template>

<script>
import compCars from './components/Cars'

export default {
    components:{
        compCars
    },

    data(){
        return{
                    cars:[
                {make: "Saab", model: 900},
                {make: "Subaru", model: "Crosstrek"}
            ],

        }
    },
    provide(){
        return{
            cars: this.cars,
            changeCar: this.changeCar,
        }

    }
    ,

    methods:{
        changeCar(){
            this.cars[0].make = "Ford"
        }
    },
}
</script>

<style>

</style>