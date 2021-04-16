<template>
  <div class="container">
      <h1>{{info}}</h1>
  </div>
  

  <!-- <div class="lis">
    <ul v-for="item in items" :key="item">
      <li>
        <strong>{{item[0]+'b'}}</strong>
      </li>
    </ul>
  </div> -->
</template>

<script>
// import api from '@/api'
import axios from 'axios';
export default {
    name:'data-view',
    data () {
    return {
      info: null,
      items:[]
    }
  },
    // created(){
    //   api
    //   getCrime
    // }

    // mounted () {
    //    const data = {"id_crime":12,"id_ent":14,"id_mun1":39,};
    //   const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
    //    axios.post(url,data)
    //   .then(response => {this.items = response.data[4].year;
    //   console.log(response)
    //   })
    // }








    created() {
      const data = {"id_crime":1,"id_ent":14,"id_mun1":39,};
      const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
      axios.post(url,data)
      .then(response => {this.info = response.data[4].year;
      console.log(response.data[4].year)
      })
      .catch(error => console.log(error));
    }
    // created() {
    //   const data = {"id_crime":12,"id_ent":14,"id_mun1":39,};
    //   const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
    //    axios.post(url,data)
    //   .then(response =>(this.info = response.data[4].year),
      
      
    //   )
    //   .catch(error => console.log(error));
    // }
}

</script>

<style>

</style>