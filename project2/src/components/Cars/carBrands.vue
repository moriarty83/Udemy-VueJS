<template>
    <div class="car_brands">
        <h3>Car Brands</h3>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return{
            brands: ["Mazda", "Ford", "Tesla"]
        }
    },
}
</script>

<style>
    .car_brands{
        border: 1px solid #2196f3;
        padding: 20px 20px;
    }
</style>