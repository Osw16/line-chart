<template>
  <div class="container">
    <h1>{{ info }}</h1>
    <!-- <h1>{{info_}}</h1> -->
    <div>
      <!-- <li v-for="item in posts" :key="item"></li> -->
      <!-- <li v-for="item in posts" :key="item">{{item}}</li> -->
      <!-- <button @click="submit()">Submit</button> -->
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
      <pre>
                        {{output}}
                        </pre>
      
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: "data-view",
  data() {
    return {
      info: null,
      info_: null,
      items: [],
      posts: [],
      crime: 2,
      ent: 4,
      mun1: 3,
      output: '',
      output2: 0,
    };
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
      EventService.getRandom(payload)
        .then((response) => {
          currentObj.output = response.data.map((x)=>x.total_nac);
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.posts = response.data[2];
        this.info = response.data[1].total_ent;
        this.info_ = response.data[5].year;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
li {
  color: red;
  border: 1px solid salmon;
}
</style>