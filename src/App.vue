<template>
  <div class="flex flex-col items-center p-2">
    <img
        class="h-32 w-32 lg:h-48 lg:w-48 mb-4"
        id="logo"
        alt="Petrichor Logo"
        src="./assets/logo.png"
    >
    <a class="btn mail mb-4" href="mailto:contact@petrichor.band">
      <font-awesome-icon size="lg" :icon="['far', 'envelope']" />
      contact@petrichor.band
    </a>
    <a class="btn instagram" href="https://www.instagram.com/petrichor_band_239/" target="_blank">
      <font-awesome-icon size="lg" :icon="['fab', 'instagram']" />
      @petrichor_band_239
    </a>
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
