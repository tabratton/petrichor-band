<template>
  <div class="flex flex-col items-center">
    <img
        class="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48"
        id="logo"
        alt="Petrichor Logo"
        src="./assets/logo.png"
    >
    <a class="text-white m-4" href="mailto:contact@petrichor.band">
      contact@petrichor.band
    </a>
  </div>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
