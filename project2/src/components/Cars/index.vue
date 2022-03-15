<template>
    <div>
        <h1>Welcome to Cars</h1>
        <car-list></car-list>
        <car-brands>
            <template v-slot:brands>
                <ul>
                    <li v-for="(brand, index) in brands" :key="index">{{brand}}</li>
                </ul>
            </template>
            <template v-slot:other>
                <div>
                    Other Content
                </div>
            </template>
            <h2>Default Content</h2>

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