<template>
    <p v-if="loading">Chargement en cours...</p>
    <div class="movies-container">
        <div class="movie-card" v-for="movie in movies" :key="movie.id">
      <router-link :to="{ name: 'FilmDetails', params: { id: movie.id } }" class="movie-img-link">
                <div class="movie-img">
                    <img :src="movie.poster_path" alt="Affiche">
                    {{ movie.vote_average }}
                </div>
                <div class="movie-info">
                    <p class="movie-title"><strong>{{ movie.original_title }}</strong></p>
                    <p class="movie-release">{{ movie.release_date }}</p>
                </div>
            </router-link>
            <button class="btn-ajout-panier">Ajouter au panier</button>
        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
const { loading, movies, genres } = defineProps(['loading', 'movies', 'genres']);

const note = (note) => Math.ceil(note * 10);
  
</script>

<style scoped>

.movies-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.movie-card{
    width: 280px;
    height: 600px;
    border-radius: 15px;
    margin : 10px;
    background-color: white;
    overflow: hidden;
}
.movie-img img {
  object-fit: cover;
}

.movie-title {
  margin: 10px 0;
  font-size: 18px;
}

.movie-release {
  color: #666;
  font-size: 14px;
}
.movie-rating {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.movie-card:hover {
  transform: scale(1.05); /* Grossissement au passage de la souris */
  transition: transform 0.3s ease-in-out; /* Ajout d'une transition fluide */
}

.btn-ajout-panier{
    color: white;
    background-color: #b91c1c;
    justify-content: center;
    margin-left: 40px;
    margin-top: 10px;
    width: 200px;
    border-radius: 5px;
}

.btn-ajout-panier:hover{
    background-color: rgb(134, 38, 38);
    transition: transform 0.3s ease-in-out;
}
</style>