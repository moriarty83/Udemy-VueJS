<template>
    <div>
    <app-header></app-header>
    <div class="container">

    <h2>Hello {{name}}</h2>
    </div>
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
    body {
        font-family: "Roboto";
    }
    .container{
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>

