<template>
  <header>

  </header>
  <!-- <MenuDrop /> -->
  <!-- <RealData /> -->
  <!-- <Dotd3/> -->
  <!-- <PackChart :tweetData="loadData" /> -->
  <!-- <BaseLoading /> -->



</template>

<script>
import * as d3 from "d3";

import MenuDrop from './components/MenuDrop.vue'
import BaseLoading from './components/BaseLoading.vue'
import RealData from './components/RealData.vue'
import Dotd3 from './components/Dotd3.vue'
import PackChart from './components/Chart.vue'


export default {
  name: 'App',
  components: {
    MenuDrop,
    BaseLoading,
    RealData,
    Dotd3,
    PackChart
  },
  data() {
    return {
      loadData: []
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
   created(){
    Promise.all([
      d3.json('./hechos.json'),
      d3.json('./tweets.json'),
    ]).then(([hechos,tuits])=>{
      this.loadData=hechos
    }).catch(err=>console.log(err))
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./dataset.json");
      this.loadData = data;
      console.log(data)
    }
  }
};
</script>

<style lang="scss" scoped>
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
button {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: url(http://ui-design-coder.com/wp-content/themes/twentyfifteen/css/playBtn.ce805501.svg) no-repeat top left;
  background-size: contain;
  color: transparent;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 8em;
}
button:focus {
  border: none;
}

button#playBtn {
  fill: red;
}

button:focus {
  outline: none;
}
</style>
