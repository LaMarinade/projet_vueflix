<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import VueFlixLogo from '../../img/vueflix-logo.png'

const logged = ref(false)
const toggle = () => (logged.value = !logged.value)
</script>

<template>
  <header>
    <div class="container">
      <div class="flex">
        <h1>
          <RouterLink to="/"><img class="logo" :src="VueFlixLogo" alt="Logo" /></RouterLink>
        </h1>
        <nav class="flex">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/Films">Films</RouterLink>
          <RouterLink to="/About">A propos</RouterLink>
          <Button @click="toggle" v-if="!logged" class="user-not-logged">Connexion</Button>
          <div v-else class="user-logged">
            <strong>Marinade</strong>
            <img class="profile-img" src="img/avatar-vueflix.png" alt="Marinade" />
            <Button @click="toggle">X</Button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container{
  margin-top: -35px;
  margin-bottom: -35px;
}
.logo{
width: 200px;
}

header {
  background-color: transparent;
  padding: 10px 0;
}
  .flex {
    align-items: center;
    justify-content: space-between;
  }

  nav {
    color: #fff;
    align-items: center;
}
    nav, a {
      color: #fff;
      padding: 0 8px;
    
  }


h1 {
  font-size: 24px;
}

  h1, a {
    color: #ede6e6;
  
  }
  .red {
    color: red;
  }
.user-logged {
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
  gap: 10px;
 }

.profile-img {
    border-radius: 50%;
    width: 70px;
  }

.user-not-logged {
  margin-left: 40px;
}
</style>