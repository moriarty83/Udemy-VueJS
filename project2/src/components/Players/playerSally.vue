<template>
    <div>
        Sally is On
    </div>
</template>

<script>
export default {
    name: "player-sally",
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