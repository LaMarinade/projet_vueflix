<template>
        <h1 class="text-2xl font-semibold mx-auto mt-4 text-center">Notre Équipe</h1>
            <div class=" container mx-auto flex">
                <Card
              v-for="(member, index) in teamMembers"
              :key="index"
              :profileImage="member.profileImage"
              :name="member.name"
              :role="member.role"
              :bio="member.bio"
            />

            </div>
        
  </template>
  
  <script setup>
  import Card from '../components/Card.vue';
  
  const teamMembers = [
    {
      profileImage: '../img/manager.png',
      name: 'Marinade',
      role: 'Manager',
      bio: 'Biographie du manager...'
    },
    {
      profileImage: '../img/developer.png',
      name: 'Joe',
      role: 'Developer',
      bio: 'Biographie du dev...'
    },
    {
      profileImage: '../img/commerciale.png',
      name: 'Shakya',
      role: 'Commerciale',
      bio: 'Biographie de la commerciale...'
    },
    // Ajoutez les autres membres ici
  ];
  </script>
  

<style>

.container{
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

h1{
  color: white;
}
</style>