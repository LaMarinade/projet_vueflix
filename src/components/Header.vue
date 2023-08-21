<template>
  <header class="bg-slate-700 p-2 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <img src="/path/to/your/logo.png" alt="Vueflix" class="h-10" />
    </div>
    <div class="flex items-center space-x-4">
      <router-link to="/" class="text-white text-base hover:text-gray-200">Accueil</router-link>
      <router-link to="/films" class="text-white text-base hover:text-gray-200">Films</router-link>
      <router-link to="/about" class="text-white text-base hover:text-gray-200">À propos</router-link>
      <button @click="toggleUserStatus" class="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded">
        {{ userLoggedIn ? 'Déconnexion' : 'Connexion' }}
      </button>
      <div v-if="userLoggedIn" class="flex items-center space-x-4">
        <img class="avatar-img" :src="image" alt="Avatar de l'utilisateur" />
        <p class="text-gray-200">{{ userName }}</p>
      </div>
    </div>
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
