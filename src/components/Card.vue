<template>
  <div class="container-card">
    <div class="center-left">
      <div class="profile-picture">
      <img class="image-profile" :src="profileImage" alt="Photo de profil" />
       </div>

      <div class="name">
        <h2 class="text-lg font-semibold">{{ name }}</h2>   
      </div>
    </div>
    
     <div class="center-left">

      <div class="role">
    <p class="text-gray-600">{{ role }}</p>
    </div>
    <div class="bio">
      <button @click="showBio" class="bg-red-600 hover:bg-red-500 text-white text-sm py-1 px-4 rounded">Voir biographie</button>
      <p v-if="showingBio" class="mt-2">{{ bio }}</p>

     </div>
    
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  profileImage: String,
  name: String,
  role: String,
  bio: String,
});

const showingBio = ref(false);

const showBio = () => {
  showingBio.value = !showingBio.value;
};
</script>

<style scoped>

.container-card{
  background-color: rgba(122, 118, 118, 0.8);
  width: 450px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #888888;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.profile-picture{
  display: flex;
  justify-content: center;
}

.image-profile{
  border-radius: 50%;
  width: 130px;
}

.center-left{
  text-align: center;
  width: 200px;
}
</style>