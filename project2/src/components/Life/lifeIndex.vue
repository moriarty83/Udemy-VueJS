<template>
    <div>
        <h2>Life</h2>
        <h3>{{text}}</h3>
        <button @click="this.text = 'changed...'">Change Text</button>
    </div>


</template>

<script>
export default {
    data(){
        return{
            text: "New Life"
        }
    },

    beforeCreate() {
        console.log("1-before create")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("before mount")
    },
    mounted() {
        console.log("Mounted")
    },
    beforeUpdate() {
        console.log("before update")
    },
    updated() {
        console.log("Updated")
    },
}
</script>