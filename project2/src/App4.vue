<template>
    
        <app-header></app-header>
        <div class="container">
            <button @click="this.activeComp = 'player-mike'">Mike</button>
            <button @click="this.activeComp = 'player-sally'">Sally</button>
            
            <keep-alive include="player-sally">
                <component :is="activeComp"></component>
            </keep-alive>
            <!-- <player-mike v-if="activeComp === 'comp-mike'"></player-mike>
            <player-sally v-if="activeComp === 'comp-sally'"></player-sally> -->
        </div>
        <app-footer></app-footer>
    
</template>

<script>
    import playerMike from './components/Players/playerMike.vue'
    import playerSally from './components/Players/playerSally.vue'

export default {
    components:{
        playerMike,
        playerSally,
    },
    data() {
        return{
        activeComp:'player-mike',
        }
    },
}
</script>

