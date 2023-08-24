<template>
  <h1 class="title">Films</h1>
  <MovieCard :movies="movies" :loading="loading" />
  <div class="button-container">
        <Button @click="loadMore" v-if="!loading && page < 4">Voir plus</Button>
        <Loader v-if="loading" message="Des films en plus" />
      </div>
</template>

  
 
 <script setup> 
 import MovieCard from '../components/MovieCard.vue';
 import { $fetch } from 'ohmyfetch'
 import { onBeforeMount, ref } from 'vue'
 import Loader from '../components/Loader.vue'

  
 const movies = ref([])
 const loading = ref(true)
 // Mode asynchrone
 $fetch('https://api.vueflix.boxydev.com/movies').then(response => {
   setTimeout(() => {
     movies.value = response
     loading.value = false
   }, 500)
 })
  
 // Mode synchrone
 const genres = ref([]);
 onBeforeMount(async () => {
   genres.value = await $fetch('https://api.vueflix.boxydev.com/genres')
 })
 </script>

 <style scoped>
h1{
  text-align: center;
  font-size: 2rem;
}
</style>