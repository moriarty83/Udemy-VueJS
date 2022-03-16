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

    </div>
</template>

<script>
export default {
    data() {
        return {
            status: false,
            
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