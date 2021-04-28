<template>
<div>
  <form @submit="submitir">
        <strong>crime:</strong>
        <input type="number" class="form-control" v-model="crime" />
        <strong>estado:</strong>
        <input type="number" class="form-control" v-model="ent" />
        <strong>municipio:</strong>
        <input type="number" class="form-control" v-model="mun1" />

        <button class="">Submit</button>
      </form>
      <strong>Output:</strong>

       <PackChart :tweetData="output" />

</div>
</template>

<script>
import * as d3 from 'd3'
import PackChart from './Chart.vue'

export default {
  name: 'axis',
  data () {
    return {
      PackChart,
     crime: 2,
      ent: 4,
      mun1: 3,
      output: [],
    }
  },
  
  methods: {
    submitir(e) {
      e.preventDefault();
      const currentObj = this;
      const payload = {
        id_crime: Number(this.crime, 10),
        id_ent: Number(this.ent, 10),
        id_mun1: Number(this.mun1, 10),
      };
      console.log(payload);
      let data = d3.json('https://spotlight-unfpa.datacivica.org/api/v1/timeline',{
        method:"POST",
        body:JSON.stringify(payload)
      });
      currentObj.output = data;
      console.log(data)
    },
  }
}
</script>

<style>
.yA path,
.grid path,
.yA .tick line {
  stroke: transparent;
}
</style>
