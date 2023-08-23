<template>
  <header class="bg-slate-700 p-2 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <p class="title text-2xl">
        <span class="text-white">Vue</span><span class="text-red-500">Flix</span>
      </p>
    </div>
    <div class="flex items-center space-x-4">
      <div v-if="userLoggedIn" class="flex items-center space-x-4">
        <img class="avatar-img" :src="image" alt="Avatar de l'utilisateur" />
        <p class="text-gray-200">{{ userName }}</p>
      </div>
      <button @click="toggleUserStatus" class="bg-red-600 hover:bg-red-500 text-white text-sm py-2 px-4 rounded">
        {{ userLoggedIn ? 'Déconnexion' : 'Connexion' }}
      </button>
    </div>
    <button @click="toggleMenu" class="burger-icon">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
    <div :class="['navbar-content', { active: isMenuOpen }]">
      <router-link to="/" class="text-white text-sm hover:text-gray-200">Accueil</router-link>
      <router-link to="/films" class="text-white text-sm hover:text-gray-200">Films</router-link>
      <router-link to="/about" class="text-white text-sm hover:text-gray-200">À propos</router-link>
    </div>
  </header>
</template>



<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['userLoggedIn', 'userName', 'toggleUserStatus', 'image']);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.avatar-img {
  width: 100px;
  border-radius: 50%;
}
.burger-icon {
  display: none;
  cursor: pointer;
  background: none;
  border: none;
}

.burger-line {
  display: block;
  width: 25px;
  height: 2px;
  background-color: white;
  margin: 4px 0;
}

/* Styles pour le contenu de la barre de navigation */
.navbar-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: #1a202c;
  padding: 10px;
  display: none;
}

/* Média Query pour les écrans plus petits (mobiles) */
@media screen and (max-width: 768px) {
  .burger-icon {
    display: block;
  }

  .navbar-content.active {
    display: flex;
  }

  .title {
    display: none;
  }
}
</style>
