<template>
  <div class="container">
      <h1>{{info}}</h1>
      <h1>{{info_}}</h1>
      <div>
        <!-- <li v-for="item in posts" :key="item"></li> -->
        <li v-for="item in posts" :key="item">{{item}}</li>

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
      posts:[]
    }
  },
    created() {
      const data = {"id_crime":1,"id_ent":14,"id_mun1":39,};
      const url = 'https://spotlight-unfpa.datacivica.org/api/v1/timeline';
      axios.post(url,data)
      .then(response => {this.posts = response.data[2];
      this.info = response.data[2].total_ent;
      this.info_ = response.data[5].year;
      console.log(response.data[2])
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