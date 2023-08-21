<template>
 <div class="w-16 h-16 rounded-full mr-4 overflow-hidden">
  <img class="w-full h-full" :src="profileImage" alt="Photo de profil" />

    <div class="flex flex-col">
      <h2 class="text-lg font-semibold">{{ name }}</h2>
      <p class="text-gray-600">{{ role }}</p>
      <button @click="showBio" class="mt-2 text-blue-600 hover:underline">Voir la biographie</button>
      <p v-if="showingBio" class="mt-2">{{ bio }}</p>
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