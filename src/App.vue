<template>
  <div class="flex flex-col items-center p-2">
    <img
        class="h-32 w-32 lg:h-48 lg:w-48 mb-4"
        id="logo"
        alt="Petrichor Logo"
        src="./assets/logo.png"
    >
    <div class="flex items-center">
      <font-awesome-icon class="text-white mr-2" size="lg" :icon="['far', 'envelope']" />
      <span class="text-white mr-2">E-mail:</span>
      <a class="text-blue-500 hover:text-blue-700" href="mailto:contact@petrichor.band">
        contact@petrichor.band
      </a>
    </div>
    <div class="flex items-center">
      <font-awesome-icon class="text-white mr-2" size="lg" :icon="['fab', 'instagram']" />
      <span class="text-white mr-2">Instagram:</span>
      <a class="text-blue-500 hover:text-blue-700" href="https://www.instagram.com/petrichor_band_239/" target="_blank">
        @petrichor_band_239
      </a>
    </div>
  </div>
  <BandImages/>
</template>

<script>
import BandImages from './components/BandImages.vue'

export default {
  name: 'App',
  components: {
    BandImages
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
