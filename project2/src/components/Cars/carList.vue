<template>
    <div>
        <ul>
            <li v-for="car in cars" :key="car.model">{{car.make}}</li>

        </ul>
        <button @click="changeCar">Change Cars</button>
    </div>
</template>

<script>
export default{
    inject:['cars', 'changeCar'],
    data(){
        return {}
    },
}
</script>