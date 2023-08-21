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
    import { ref, defineProps } from 'vue';

    const props = defineProps(['userLoggedIn', 'userName', 'toggleUserStatus', 'image']);
  </script>

  
  <style scoped>
  .avatar-img{
    width: 100px;
    border-radius: 50%;
  }
  </style>
  