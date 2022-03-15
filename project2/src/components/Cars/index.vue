<template>
    <div>
        <h1>Welcome to Cars</h1>
        <car-list></car-list>
        <car-brands>
            <ul>
                <li v-for="(brand, index) in brands" :key="index">{{brand}}</li>
            </ul>
        </car-brands>
    </div>
</template>

<script>
import carList from './carList.vue'
import carBrands from './carBrands.vue'
export default{
    name: "comp-cars",
    // props:['cars'],
    data(){
        return{
            brands: ["Mazda", "Ford", "Tesla"]

        }
    },
    components:{
        carList,
        carBrands,
    },
    
}
</script>