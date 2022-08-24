<template>
  <div class="w-screen h-screen">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from "@/components/Navbar.vue"
import Home from './views/Home.vue'


export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>


<style />