<template>

<div>{{crazy}}</div>
<div v-if="Object.keys(article).length !== 0">
    <router-link to="/articles/4">Article 4</router-link>
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Incididunt ut labore et dolore magna aliqua</h1>
            <p class="lead my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
        </div>
    </div>

    <div class="row g-5">
        <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
                {{ article.title }}
            </h3>

            <article class="blog-post">
                <p class="blog-post-meta">December 14, 2020 by <strong>Chris</strong></p>

                <div v-html="article.content"></div>
            </article>

        </div>

        <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">
                <div class="p-4 mb-3 bg-light rounded">
                    <h4 class="fst-italic">About</h4>
                    <p class="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et. </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['crazy'],
    beforeRouteEnter () {
      (console.log('hello'))
    },
    beforeRouteUpdated(){
      console.log('Update')
    },

    data() {
        return {
            article: {}
        }
    },
    mounted() {
        this.loadArticle(this.$route.params.id)
    },
    methods: {
        loadArticle(articleID) {
            const id = articleID
            axios.get(`http://localhost:3004/articles/${id}`)
                .then(response => {
                    console.log(response.data)
                    this.article = response.data
                    console.log(Object.keys(this.article))
                })
        }
    },
    watch: {
        $route(to) {
            this.loadArticle(to.params.id)

        }
    }
}
</script>
