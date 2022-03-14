<template>
    <div>
    <app-header></app-header>
    <h2>Hello {{name}}</h2>
    <comp-footer></comp-footer>
    </div>
</template>
    
<script>
    import Footer from './components/Footer.vue'
    export default{
        data(){
            return{
                name: 'Chris',
            }
        },
        components:{
            'comp-footer': Footer,
        }
    }

</script>

<style>
    h1 {
        color: red;
    }
</style>