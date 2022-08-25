<template>
  <nav class="w-full h-min bg-zinc-800 text-white flex gap-12 justify-between px-4">
    <a href="/">
      <div class="w-max p-2 flex gap-2 items-center">
        <img src="/logo/Logo1.png" class="w-10 h-10" />
        <span class="text-lg font-bold whitespace-nowrap">Gente prevalente</span>
      </div>
    </a>
    <div v-if="width > 768" class="flex w-full justify-between items-center">
      <content-nav-bar />
    </div>
    <div v-else class="relative flex flex-col item-center">
      <button @click="isShowingContent = !isShowingContent" class="p-4 bg-transparent">
        <img src="/icons/Options.png" />
      </button>
      <transition name="fade">
        <div v-if="isShowingContent"
          class="flex flex-col-reverse gap-4 absolute top-full right-0 h-64 bg-zinc-700 overflow-y-auto p-2 rounded z-50">
          <content-nav-bar />
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import ContentNavBar from "./ContentNavBar.vue";
export default {
  components: {
    ContentNavBar,
  },
  setup() {
    /**
     * Booleans
     */
    let isShowingContent = ref(false);

    /**
     * Numbers
     */
    let windowWidth = ref(window.innerWidth);
    const width = computed(() => windowWidth.value);

    /**
     * Functions
     */
    onMounted(() => {
      window.addEventListener("resize", onWidthChange);
    });
    const onWidthChange = () => (windowWidth.value = window.innerWidth);

    return { isShowingContent, width };
  },
};
/**
 *  <nav>
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
 */
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>