<template>
    <header>
      <div v-if="userLoggedIn">
        <img class="avatar-img" :src="image" alt="Avatar de l'utilisateur" />
        <p>{{ userName }}</p>
      </div>
      <button @click="toggleUserStatus">{{ userLoggedIn ? 'Déconnexion' : 'Connexion' }}</button>
    </header>
  </template>
  
  <script setup>
import { ref } from 'vue';
import image from "../../img/avatar-vueflix.png";

const userLoggedIn = ref(false);
const userName = ref("Nom de l'utilisateur");

const toggleUserStatus = () => {
  userLoggedIn.value = !userLoggedIn.value;
};
  </script>
  
  <style scoped>
  .avatar-img{
    width: 100px;
  }
  </style>
  