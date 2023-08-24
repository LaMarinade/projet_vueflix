<template>
  <div id="app" class="app-cover">
    <Header :userLoggedIn="userLoggedIn" :userName="userName" :image="image" :toggleUserStatus="toggleUserStatus"/>
    <router-view />
    <Footer :numberOfFilms="numberOfFilms" :currentYear="currentYear"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'

const userLoggedIn = ref(false);
const userName = ref('Marinade');
const image = ref('./img/avatar-vueflix.png'); 

const toggleUserStatus = () => {
   userLoggedIn.value = !userLoggedIn.value;
};

const numberOfFilms = ref(2446); 
const currentYear = ref(new Date().getFullYear());
</script>

<style>
.app-cover {

  background: linear-gradient(
    rgba(0, 0, 0, 0.9), /* Couleur d'ombre en haut */
    transparent,
    transparent,
    transparent,
    rgba(0, 0, 0, 0.9) /* Couleur d'ombre en bas */
  ), url('/img/vueflix-background.png');
  background-repeat: no-repeat;
  background-size: cover;

}

</style>
 <!-- background-image: url('img/vueflix-background.png');
  background-repeat: no-repeat;
  background-size: cover; -->