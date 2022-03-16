<template>
  <app-header></app-header>
        <div class="container">
          <compTransitionsTwo></compTransitionsTwo>
            <compTransitionsOne></compTransitionsOne>
        </div>
    <app-footer></app-footer>
</template>

<script>
  import compTransitionsTwo from './components/Transitions/two'
  import compTransitionsOne from './components/Transitions/one';

  export default{
    components:{
      compTransitionsOne,
      compTransitionsTwo
    }
  }
</script>
