<template>
  <div class="container">
      <!-- <h1>{{info}}</h1>-->
      <h1>{{info_}}</h1> 
      <div>
        <!-- <li v-for="item in posts" :key="item"></li> -->
        <!-- <li v-for="item in posts" :key="item">{{item}}</li> -->
        <!-- <button @click="submit()">Submit</button> -->
        <form @submit="submitir">
          <strong>crime:</strong>
            <input type="number" class="form-control" v-model="crime">
          <strong>estado:</strong>
            <input type="number" class="form-control" v-model="ent">
          <strong>municipio:</strong>
            <input type="number" class="form-control" v-model="mun">
            
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

import axios from 'axios';
export default {
    name:'data-view',
    data () {
    return {
      info: null,
      info_: null,
      items:[],
      posts:[],
      crime: '',
      ent: '',
      mun: '',
      output:''

    }
  },
     methods: {
       submit(){
         const payload = {id_crime:1,id_ent:14,id_mun1:39};
        const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
        axios.post(url,payload)
        .then(response => {this.posts = response.data[3];
        console.log(response.data[4])
      })
        .catch(error => console.log(error));
      },
      submitir(e){
        e.preventDefault();
        let currentObj = this;
        const payload = {
                    id_crime: this.crime,
                    id_ent: this.ent,
                    id_mun1: this.mun 
                }
        console.log(payload)
        const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
        axios.post(url,payload)
        .then(response => {currentObj.output = response.data;
      })
        .catch(error => console.log(error));
      }
    },
          created() {
            const payload = {id_crime:1,id_ent:14,id_mun1:39};
            const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
            axios.post(url,payload)
            .then(response => {this.posts = response.data[2];
            this.info = response.data[2].total_ent;
            this.info_ = response.data[5].year;
            })
            .catch(error => console.log(error));
          }
}

</script>

<style scoped>
li{
  color:red;
  border:1px solid salmon;
}
</style>