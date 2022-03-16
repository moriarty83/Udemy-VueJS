<template>
    <div>
        Transitions 2
        <hr />
        <button class="btn btn-primary" @click="status = !status">
            Toggle
        </button>
        <transition 
            name="fader" 
            mode="out-in"
            enter-active-class="dog"
            leave-active-class="cat">
        <div class="p-3 mb-2 bg-danger" v-if="status" key="status_off">
            <h4 >Off</h4>
        </div>

        <div class="p-3 mb-2 bg-success" v-else key="status_on">
            <h4 >On</h4>
        </div>

        </transition>


                <hr />
        <button class="btn btn-primary" @click="library = !library">
            Toggle Animate CSS
        </button>


        <transition name="whatever"
        enter-active-class="animate__animated animate__backInDown"
        leave-active-class="animate__animated animate__backOutDown">
        <div class="p-3 mb-2 bg-warning" v-if="library">
            Animate CSS
        </div>
        </transition>

    </div>
    <hr/>
</template>

<script>
export default {
    data() {
        return {
            status: false,
            library: false,
            
        }
    },
}
</script>

<style>
    .fader-enter-from,
    .fader-leave-to{
        opacity: 0;

    }
    .dog,
    .cat{
        transition: 1s
    }
    .fader-enter-to,
    .fader-leave-from{
        opacity: 1;
    }
</style>