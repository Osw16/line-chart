<template>
  <header>

  <MenuDrop />
  </header>
  <!-- <RealData /> -->
  <!-- <HelloWorld /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuDrop from './components/MenuDrop.vue'
import RealData from './components/RealData.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RealData,
    MenuDrop
  }
}
</script>

<style lang="scss">
#app {

  background:rgb(202, 150, 209);
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family:'monsterrat', sans-serif;
}
header{
  width:100vw;
  background-color:#222;
  padding:15px;
}
</style>
