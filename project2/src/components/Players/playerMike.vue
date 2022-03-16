<template>
    <div>
        Mike is On
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Mounted")
    },
    unmounted() {
        console.log("Unmounted")
    },
    activated() {
        console.log("activated")
    },
    deactivated() {
        console.log("deactivated")
    },
}
</script>