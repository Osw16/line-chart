<template> 
  <div class="container">
  <svg class="svg">
    <path fill="none"
      stroke="yellow"
      stroke-width="5"
      :d="d"/>
    <circle
      v-for="(item, index) in dataset"
      :key="index"
      :cx="item[0]"
      :cy="item[1]"
      r="50"
      fill="#ff6347"
      @click="onClick(item)"
    />
  </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import dataset from './dataset.json'
export default {
  name: 'CreatingDots',
  data() {
    return {
      dataset
    }
  },
  methods: {
    onClick(item) {
      console.log('hey there', item)
    }
  },
  computed:{
    lineGenerator(){
      return d3.line()
      .x(v=> v[0])
      .y(v=> v[1])
    },
    d(){
      return this.lineGenerator(this.dataset)
    }
  }
}
</script>
<style scoped>
.container{
  border:1px solid blueviolet;
}
.svg{
  border:1px solid palevioletred;
  height: 100vh;
  width: 100vh;
}
</style>