<template>
    Transitions 1
    <button class="btn btn-primary" @click="display = !display">Display</button>

    <transition>
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
    </transition>
    <hr />

    <button class="btn btn-primary" @click="display2 = !display2">Display2</button>

    <transition>
        <div class="p-3 mb-2 bg-success text-white bg-warning" v-show="display2">Hello</div>
    </transition>

        <hr />

    <button class="btn btn-primary" @click="display3 = !display3">Display3</button>

    <transition name="slide">
        <div class="p-3 mb-2 bg-success text-white bg-info" v-if="display3">Hello</div>
    </transition>

            <hr />

    <button class="btn btn-primary" @click="display4 = !display4">Display4</button>

    <transition name="slideup">
        <div class="p-3 mb-2 bg-success text-white bg-info" v-if="display4">Hello</div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            display: false,
            display2: false,
            display3: false,
            display4: false,
        }
    },
}
</script>

<style scoped>
    .v-enter-from,
    .v-leave-to{
        opacity: 0;

    }
    .v-enter-active,
    .v-leave-active{
        transition: 1s
    }
    .slide-enter-from{
        transform: translateX(50%);
        opacity: 0;
    }
    
    .slide-enter-active{
        transition: 1s;
    }


    .slide-enter-to{
        opacity: 1;
        
    }

    .slide-leave-from{
                background-color: red !important;

        opacity: 1;
    }

    .slide-leave-active{
        transition: 2s
    }

    .slide-leave-to{
        opacity: 0;
        
        transform: translateY(50px);

    }

    .slideup-enter-active{
        animation: slideup 1s ease-in-out;
    }

    .slideup-leave-active{
        animation: slidedown 1s ease-in-out;
    }

    @keyframes slideup{
        from{
            opacity: 0;
            transform: translateY(20px)
        }
        to{
            opacity: 1;
            transform: translateY(0px)
        }
    }
        @keyframes slidedown{
        from{
            opacity: 1;
            transform: translateY(0px)
        }
        to{
            opacity: 0;
            transform: translateY(20px)
        }
    }

    

</style>

