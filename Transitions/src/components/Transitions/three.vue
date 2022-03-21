<template>
    <div>
        Transitions 3
        <br>
        <button class="btn btn-primary" @click="status = !status">Transition</button>
        <transition     
            name="methods"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            :css="false">
            <div class="p-3 mb-2 bg-info" v-if="status">
                Method based Transition
            </div>
        </transition>
        <hr>
        <div class="form-group">
            <input type="text" v-model="name" class="form-control">
            <button class="btn btn-primary" @click="addOne">Add Name</button>
        </div>
        <div>
            <ul class="pl-0">
                <transition-group name="list" appear="true">
                
                    <li class="list-group-item"
                    v-for="(item, index) in list"
                    :key="item"
                    @click="removeItem(index)">
                        {{item}}
                    </li>
                </transition-group>
            </ul>
        </div>
    

    </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
    data() {
        return {
            status: false,
            list:['Tom', 'Dick', 'Harry'],
            name: '',
        }
    },
    methods:{
        addOne(){
            if(!this.list.includes(this.name)){
                this.list.unshift(this.name)
            }
        },
        removeItem(index){
            this.list.splice(index, 1)
        },
        beforeEnter(el){
            el.style.opacity=0;
        },
        enter(el, done){
            Velocity(el,
                {opacity: 1, fontSize: '20px'}, 
                {duration: 2000, complete: done})
        },
        afterEnter(){

        },
        beforeLeave(){

        },
        leave(el, done){
            Velocity(el,{
                rotateZ: '180deg',
                opacity: 0,
            },{loop: 2,
            complete: done})
        },
        afterLeave(){

        },
    }
}
</script>

<style>
    .list-enter-from,
    .list-leave-to{
        opacity: 0;
    }
    .list-enter-active{
        transition: 1s
    }
    .list-leave-active{
        width: 100%;
        transition: 1s;
        position: absolute;
    }
    .list-enter-to,
    .list-leave-from{
        opacity: 1;
    }

    .list-move{
        transition: transform 1s;
    }
</style>