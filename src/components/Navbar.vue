<template>
  <nav>
    <!-- desktop Menu -->
    <div class="bg-neutral-800">
      <div class="max-w-1xl mx-auto">
        <div class="flex justify-between">
          <!-- Menu -->
          <div class="flex space-x-4">
            <!-- Logo -->
            <a href="/" class="flex items-center">
              <img src="../assets/images/logo/Logo1.png" />
              <span class="pr-40 font-bold text-white">
                Gente PreValente
              </span>
            </a>
            <!-- Menu -->
            <div class="hidden md:flex items-center space-x-40">
              <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center">
                  <img src="../assets/images/icons/Search.png" />
                </span>
                <input
                  class="px-2 block text-white placeholder:text-white bg-transparent w-full rounded-md pl-5 shadow-sm focus:outline-none focus:border-black-500 focus:ring-black-500 focus:ring-1"
                  placeholder="Buscar..." type="text" name="search" />
              </label>
              <a href="/" class="px-2 flex items-center">
                <img class="pr-2" src="../assets/images/icons/Settings.png" />
                <span class="text-white hover:text-gray-500">
                  Administración
                </span>
                <img class="inline" src="../assets/images/icons/Notification.png" />
              </a>
              <a href="/" class="px-2 flex items-center">
                <img class="pr-2" src="../assets/images/icons/Job.png" />
                <span class="text-white hover:text-gray-500">
                  Empleo
                </span>
                <img class="pl-2" src="../assets/images/icons/VectorDown.png" />
              </a>
              <a href="/" class="px-2 flex items-center">
                <img class="pr-2" src="../assets/images/icons/Cv.png" />
                <span class="text-white hover:text-gray-500">
                  Mi CV
                </span>
              </a>
              <a href="/" class="px-2 flex items-center">
                <img class="pr-2" src="../assets/images/icons/Ellipse.png" />
                <span class="text-white hover:text-gray-500">
                  Daniel
                </span>
                <img class="pl-2" src="../assets/images/icons/VectorDown.png" />
              </a>
            </div>
          </div>
          <!-- Button Show Mobile Menu -->
          <div class="md:hidden flex item-center">
            <button @click="toggleNav" class="mr-5">
              <img src="../assets/images/icons/Options.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden bg-neutral-800" v-show="showMenu">
      <a href="/" class="block py-2 px-4 text-white hover:text-gray-700 hover-texto-gray-500">
        Administración
      </a>
      <a href="/" class="block py-2 px-4 text-white hover:text-gray-700 hover-texto-gray-500">
        Empleo
      </a>
      <a href="/" class="block py-2 px-4 text-white hover:text-gray-700 hover-texto-gray-500">
        Mi CV
      </a>
      <a href="/" class="block py-2 px-4 text-white hover:text-gray-700 hover-texto-gray-500">
        Cuenta
      </a>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>

<style>
</style>