<template>
    <div>
        <h3>
            Sally is On
        </h3>
        <teleport to='body' >
        <modal-util></modal-util>
        </teleport>
    </div>
</template>

<script>
import modalUtil from '../Utils/modalUtil.vue'

export default {
    name: "player-sally",
    
    components:{
        modalUtil,
    },
    mounted() {
        console.log("Sally Mounted")
    },
    unmounted() {
        console.log("Sally Unmounted")
    },
    activated() {
        console.log("Sally activated")
    },
    deactivated() {
        console.log("Sally deactivated")
    },
}
</script>