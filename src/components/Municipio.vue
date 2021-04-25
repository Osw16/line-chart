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
            v-for="(municipio, index) in municipios"
            :key="index"
            v-slot="{ active }"
          >
            <a
              href="ref"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-1xl	 ',
              ]"
              >{{ municipio.name_mun }}
              <div class="text-xs italic text-right name-short">
                {{ municipio.name_ent_short }}
              </div>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

import EventService from "@/services/EventService.js";

export default {
  props: ["title", "items", "name"],
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
  data() {
    return {
      municipios: [],
    };
  },
  created() {
    EventService.getState()
      .then((response) => {
        this.municipios = response.data;
        const respuesta = response.data;
        console.log(this.municipios);
        console.log(respuesta);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Archivo Narrow", sans-serif;
  background: #25859a;
}
.name-short {
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(38%, rgba(143, 93, 137, 1)),
    color-stop(77%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(143, 93, 137, 1) 38%,
    rgba(255, 255, 255, 1) 77%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(143, 93, 137, 1) 38%,
    rgba(255, 255, 255, 1) 77%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(143, 93, 137, 1) 38%,
    rgba(255, 255, 255, 1) 77%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(143, 93, 137, 1) 38%,
    rgba(255, 255, 255, 1) 77%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=1 );
}
h1,
h2,
h3,
h4 {
  font-family: "Fjalla One", sans-serif;
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
  background: #ff6542;
  border: 1px solid #88498f;
  border-right: 1px solid #f44822;
}

.beer-info {
  background: #564154;
  color: white;
  padding: 30px;
  border: 1px solid #88498f;
  .bright {
    color: #fcd7cf;
    font-family: "Contrail One", sans-serif;
  }
}

h3 {
  margin-bottom: 5px;
}

ul {
  margin-top: 5px;
}
</style>