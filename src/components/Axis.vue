<template>
  <div>
    <form @submit="fetchData">
      <strong>crime:</strong>
      <input type="number" class="form-control" v-model="crime" />
      <strong>estado:</strong>
      <input type="number" class="form-control" v-model="ent" />
      <strong>municipio:</strong>
      <input type="number" class="form-control" v-model="mun1" />

      <button class="">Submit</button>
      
    </form>
    <PackChart :tweetData="loadData" />
    <strong>Output:</strong>

  </div>
</template>

<script>
import * as d3 from "d3";
import PackChart from "./Chart";

export default {
  name: "Axis",
  components:{
    PackChart
  },
  data() {
    return {
      crime: null,
      ent: null,
      mun1: null,
      loadData:[],
    };
  },
  mounted(){
    console.log("AxisLoaded")
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const payload = {
        id_crime: Number(this.crime, 10),
        id_ent: Number(this.ent, 10),
        id_mun1: Number(this.mun1, 10),
      };
      console.log(payload);
      let data = await d3.json(
        "https://spotlight-unfpa.datacivica.org/api/v1/timeline",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );
      this.loadData = data;
      console.log(data);
    },
  },
};
</script>

<style>
.yA path,
.grid path,
.yA .tick line {
  stroke: transparent;
}
</style>
