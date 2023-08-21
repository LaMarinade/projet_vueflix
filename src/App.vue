<template>
  <div id="app" class="bg-gray-100">
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

const numberOfFilms = ref(2446); // Remplacez 10 par la valeur réelle
const currentYear = ref(new Date().getFullYear());
</script>

<style>
/* Styles globaux pour votre application */
</style>
