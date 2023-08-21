<template>
    <footer>
      <p>Copyright  {{ currentYear }} Catalogue de {{ numberOfFilms }} films</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
        numberOfFilms: 2446, // Mettez la valeur correcte ici
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant Footer */
  </style>
  