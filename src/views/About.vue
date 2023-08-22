<template>
        <h1 class="text-2xl font-semibold mx-auto mt-4 text-center">Notre Équipe</h1>
        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> -->
            <div class=" container mx-auto p-8 flex items-center">

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
      profileImage: '../img/avatar-vueflix.png',
      name: 'Marinade',
      role: 'Manager',
      bio: 'Biographie du manager...'
    },
    {
      profileImage: '../img/avatar-vueflix.png',
      name: 'Marinade',
      role: 'Manager',
      bio: 'Biographie du manager...'
    },
    {
      profileImage: '../img/avatar-vueflix.png',
      name: 'Marinade',
      role: 'Manager',
      bio: 'Biographie du manager...'
    },
    // Ajoutez les autres membres ici
  ];
  </script>
  