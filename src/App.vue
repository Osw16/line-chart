<template>
  
  <RealData />
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RealData from './components/RealData.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RealData
  }
}
</script>

<style lang="scss">
#app {

  background:rgb(70, 69, 69);
}
</style>
