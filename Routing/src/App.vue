<template>
  <app-header></app-header>
        <div class="container">
            <router-view>
              
            </router-view>
            <hr>
            <router-view name="notify">
            </router-view>
        </div>
    <app-footer></app-footer>
</template>

<script>
  // import HomeComponent from './components/index';
  // import ArticlesMain from './components/Articles'
  // import ArticleComp from './components/Articles/article'

  export default{
    components:{
      // HomeComponent
      // ArticlesMain
      // ArticleComp
    }
  }
</script>
