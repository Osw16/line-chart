<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div v-for="(result, index) in results"
:key="result">
  <p>{{index}}</p>
</div>
  <div>{{info}}</div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
  name:'municipio',
  props:['title', 'items','name'],
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon
  },  
  data () {
    return {
      info: null,
      results:[]
    }
  },
   mounted() {
     const url = 'https://api.npoint.io/b786b7bdd8855c88c160'
          axios.get(url).then(response => {
            this.results = response.data
          })
            console.log(response)
          },
        
  created () {
          const url = 'https://api.npoint.io/b786b7bdd8855c88c160'
          axios.get(url).then(response => {
          this.info = response.data[1].name_ent
          }).catch(error => console.log(error))
  }
}
</script>