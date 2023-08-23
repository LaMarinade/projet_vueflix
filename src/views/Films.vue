<template>
    <h1 class="title">Films</h1>
    <p v-if="loading">Chargement en cours...</p>
    <div class="movies-container">
     <div class="movie-card" v-for="movie in movies">
       <div class="movie-img">
         <img :src="movie.poster_path" alt="Affiche">
         {{ movie.vote_average }}
       </div>
       <div class="movie-info">
         <p class="movie-title"><strong>{{ movie.original_title }}</strong></p>
         <p class="movie-release">{{ movie.release_date }}</p>
   
       </div>
     </div>
    </div>
    {{ movies }}
    {{ genres }}
  </template>
 
 
 
 
 <script setup>
 import { $fetch } from 'ohmyfetch'
 import { onBeforeMount, ref } from 'vue'
  
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