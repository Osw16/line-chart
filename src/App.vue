<template>
  <header>

  </header>
  <MenuDrop />

</template>

<script>
import MenuDrop from './components/MenuDrop.vue'

export default {
  name: 'App',
  components: {
    MenuDrop
  },
  data () {
    return {
      toggleClass: 'ani1'
    }
  },

  methods: {
    play () {
      // toggle classes to animate the line draw
      this.toggleClass === 'ani1'
        ? (this.toggleClass = 'ani2')
        : (this.toggleClass = 'ani1')
    }
  }
}
</script>

<style lang="scss" scoped>
#app {

  background:rgb(202, 150, 209);
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family:'monsterrat', sans-serif;
}
header{
  width:100vw;
  background-color:#222;
  padding:15px;
}
button {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: url(http://ui-design-coder.com/wp-content/themes/twentyfifteen/css/playBtn.ce805501.svg) no-repeat top left;
  background-size: contain;
  color: transparent;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 8em;
}
button:focus {
  border: none;
}

button#playBtn {
  fill: red;
}

button:focus {
  outline: none;
}
</style>
