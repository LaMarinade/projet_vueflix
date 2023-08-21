<template>
  <div id="app">
    <Header :userLoggedIn="userLoggedIn" :userName="userName" @toggleUserStatus="toggleUserStatus"/>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">À propos</router-link>
    <router-view />
    <Footer :numberOfFilms="numberOfFilms" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
/* Styles globaux pour votre application */
</style>
