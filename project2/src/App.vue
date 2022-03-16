<template lang="">
    <div v-awesome.red.big="directiveText">
    </div>
        <div v-awesome.blue.small="directiveText">
    </div>
        <div v-awesome:blsdfsue="directiveText">
    </div>
</template>

<script>

export default {

    data() {
        return {
            directiveText: "This is cool",
        }
    },
}
</script>
<style lang="">
    
</style>