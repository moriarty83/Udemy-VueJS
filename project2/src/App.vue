<template>
    <div>
    <life-index v-if="showIt"></life-index>
    </div>
</template>

<script>
import lifeIndex from './components/Life/lifeIndex'
export default {
    data() {
        return{
            showIt: true,
        }
    },
    components:{
        lifeIndex,
    },
    mounted() {
        setTimeout(()=>{
            this.showIt = false;
        }, 3000)
    },
    beforeUnmount() {
        console.log("before destroy")
    },
    unmounted() {
        console.log("Destroyed")
    },
}
</script>

<style>

</style>