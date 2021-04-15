<template>
  <div class="container">
      <h1>{{info}}</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'data-view',
    data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://spotlight-unfpa.datacivica.org/api/v1/timeline')
      .then(response => (this.info = response))
  }
}
</script>

<style>

</style>