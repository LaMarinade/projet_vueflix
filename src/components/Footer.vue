<template>
  <footer class="flex justify-center items-center py-4">
    <p class="text-center">Copyright &copy;{{ currentYear }} Catalogue de <strong>{{ numberOfFilms }}</strong> films</p>
  </footer>
</template>


<script setup>

import { ref, defineProps } from 'vue';
const props = defineProps(['numberOfFilms', 'currentYear']);

</script>

<style scoped>
/* Styles spécifiques au composant Footer */
</style>

  