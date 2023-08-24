<script setup>
import { useRoute } from 'vue-router'
import { dayjs, getMovie } from '../api'
import { computed, ref } from 'vue'
import Note from '../components/Note.vue'
const route = useRoute()
const movie = ref({})
getMovie(route.params.id).then((response) => {
  movie.value = response
})

const year = computed(() => new Date(movie.value.release_date).getFullYear())
const duration = computed(() => {
  const hours = Math.floor(movie.value.runtime / 60)
  const minutes = movie.value.runtime % 60

  return `${hours}h${minutes < 10 ? 0 : ''}${minutes}`
})
const color = ref([0, 0, 0])
const age = (date) => new Date(Date.now() - new Date(date).getTime()).getUTCFullYear() - 1970
</script>


<template>
   <div class="movie-show" :style="{ backgroundImage: `url(${movie.backdrop_path})` }">
    <div class="movie-background" :style="{ backgroundColor: `rgba(${color}, 0.75)` }">
      <div class="container">
        <div class="flex movie-background-content">
          <img :src="movie.poster_path" :alt="movie.title" class="movie-poster" />
          <div class="movie-content flex">
            <h1>
              {{ movie.title }}
              <span>({{ year }})</span>
            </h1>
            <p class="movie-content-duration">
              {{ dayjs(movie.release_date).format('DD MMMM YYYY') }} - {{ movie.genre?.name }} -
              {{ duration }}
            </p>
            <div class="flex movie-content-note">
              <Note :note="movie.vote_average" />
              <button class="flex movie-video items-center gap-3" @click="showModal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="movie-play-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>

                <span>Voir la bande annonce</span>
              </button>
            </div>
            <div>
              <p class="movie-tagline">{{ movie.tagline }}</p>
              <h3 class="movie-synopsis-title">Synopsis</h3>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h2 class="casting-title">Casting</h2>

    <div class="flex actor-list">
      <div
        v-for="actor in movie?.actors
          ?.filter((actor) => actor.profile_path)
          .sort((actorA, actorB) => (actorA.order > actorB.order ? 1 : -1))"
        :key="actor.id"
        class="card"
      >
        <div class="content">
          <img :src="actor.profile_path" :alt="actor.name" class="actor-image" />
          <div class="card-content">
            <h2>{{ actor.name }} ({{ age(actor.birthday) }} ans)</h2>
            <p>{{ actor.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>