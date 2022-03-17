<template>
  <app-header></app-header>
        <div class="container">
          <compTransitionsThree></compTransitionsThree>

          <compTransitionsTwo></compTransitionsTwo>
          <compTransitionsOne></compTransitionsOne>
        </div>
    <app-footer></app-footer>
</template>

<script>
  import compTransitionsTwo from './components/Transitions/two'
  import compTransitionsOne from './components/Transitions/one';
  import compTransitionsThree from './components/Transitions/three'
  export default{
    components:{
      compTransitionsOne,
      compTransitionsTwo,
      compTransitionsThree,
    }
  }
</script>
