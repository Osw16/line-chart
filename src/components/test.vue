<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        {{ title }}
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto h-32"
      >
        <div class="py-1">
          <MenuItem
            v-for="(product,i) in products"
            :key="product"
            :ref="
              (el) => {
                if (el) divs[i] = el;
              }
            "
            v-slot="{ active }"
          >
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >{{ product }}</a
            >
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { ref, reactive } from "vue";
import axios from "axios";

export default {
  name: "municipio",
  props: ["title", "items", "name"],
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },

  setup() {
    const products = ref([]);
    const divs = reactive([]);
    const url = "https://api.npoint.io/2e9129c41e1f250faa90";
    axios.get(url).then((response) => {
      products.value = response.data.map((x) => x.name_mun);
      console.log(products);
    });
    setTimeout(() => {
      console.log("hello entidad");
    }, 2000);

    return {
      products,
      divs,
    };
  },
};
</script>


<template>
  <div id="app">
  <section>
    <h1>🍺 Make yourself some Punk Beers 🍻</h1>
    <div v-if="!beers.length" class="loading">Loading...</div>
    <div v-for="beer in beers" 
    :key="beer"
    class="beer-contain">
     
      <div class="beer-info">
        <h2>{{ "name" }}</h2>
        <h2>{{ beer }}</h2>
  
        <p><span class="bright">Description:</span> {{ beer.desc }}</p>
        <p><span class="bright">Tips:</span> {{ beer.tips }}</p>
        <h3 class="bright">Food Pairings</h3>
        <ul>
          <li v-for="item in beer.food"
          :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  
data() {
    return {
      bottom: false,
      beers: []
    };
  },
  created() {
    axios.get("https://api.npoint.io/2e9129c41e1f250faa90").then((response) => {
    let api = response.data.map((x) => x.name_mun)
        console.log(api)
        console.log(response.data)

      this.beers.push(api[12]);
    
    });
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: 'Archivo Narrow', sans-serif;
  background: #25859a;
}

h1, h2, h3, h4 {
  font-family: 'Fjalla One', sans-serif;
}

h1 {
  margin-top: 40px;
  color: white;
  text-align: center;
}

.loading {
  color: white;
  text-align: center;
  font-size: 20px;
}

.display {
  display: flex;
  justify-content: center;
  align-content: center;
}

#app {
  @extend .display;
  flex-direction: column;
}

.beer-contain {
  @extend .display;
  width: 50%;
  margin: 20px 24%;
  box-shadow: 0 2px 3px 1px rgba(30, 0, 0, 0.1);
}

.beer-img {
  @extend .display;
  padding: 30px;
  background: #FF6542;
  border: 1px solid #88498F;
  border-right: 1px solid #f44822;
}

.beer-info {
  background: #564154;
  color: white;
  padding: 30px;
  border: 1px solid #88498F;
  .bright {
    color: #fcd7cf;
    font-family: 'Contrail One', sans-serif;
  }
}

h3 {
  margin-bottom: 5px;
}

ul {
  margin-top: 5px;
}

</style>

