<template>
  <nav>
      <!-- <Hechos title="Hecho" :items="entidades"/> -->
      <Municipio title="Municipio"/>
      <Hechos title="Hecho"/>
      <Entidad title="Estado"/>
    
      <!-- <div class="menu-item"><a href="#">Hecho</a></div>
      <div class="menu-item"><a href="#">Estado</a></div>
      <div class="menu-item"><a href="#">Municipio</a></div> -->
  </nav>
</template>

<script>
import Hechos from './Hechos'
import Entidad from './Entidad'
import Municipio from './Municipio'

export default {
  name: 'menudrop',
  components: {
    Hechos,
    Entidad,
    Municipio
  },
  data () {
    return {
      entidades: [
        {
          name: 'Aguas Caliente',
          link: '#'
        },
        {
          name: 'Baja California',
          link: '#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
    nav{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:50px;
    }
    nav .menu-item{
        color: rgb(16, 197, 221);
        padding: 10px 20px;
        position: relative;
        text-align:center;
        border-bottom: 3px solid transparent;
        display:flex;
        transition: 0.4s;
    }
    nav .menu-item.active,
    nav .menu-item:hover{
        background-color: #444;
        border-bottom-color:#ff5858;
    }
    nav .menu-item a{
        color:inherit;
        text-decoration:none;
    }
</style>
