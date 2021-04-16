<template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <a href="#">
            {{title}}
        </a>
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-512.png" alt="arrow">
        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen">
                <div v-for="(item,i) in items" :key="i" class="menu-item">
                <a :href="item.link">{{item.name}}</a>
                </div>
            </div>
        </transition>   
    </div>
</template>

<script>

export default {
    name:'dropdown',
    props:['title','items','name'],
    data(){
        return{
            isOpen:false
        }
    }

}
</script>

<style>
nav .menu-item img{
    width:28px;
    margin-left:10px;
}
nav .menu-item .sub-menu{
    position: absolute;
    background-color:#222;
    top:calc(100% + 18px);
    left:50%;
    transform:translateX(-50%);
    width:max-content;
    border-radius: 0px 0px 16px 16px;
}
</style>