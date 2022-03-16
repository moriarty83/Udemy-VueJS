<template lang="">
    <div v-user-lastname="lastname">
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            lastname: "jones"
        }
    },
    directives:{
        'user-lastname':{
            beforeMount(el, binding) {
                el.innerHTML = binding.value;
            },
        }
    }
}
</script>
<style lang="">
    
</style>