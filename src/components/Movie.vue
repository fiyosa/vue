<script setup lang="ts">
import { computed } from 'vue'
import { store } from '../store/store'

const movies = computed(() => store.state.movies.data)
</script>

<template>
  <ul v-for="(movie, index) in movies" :key="index">
    <li>
      <img :src="movie?.Poster" />
      <h4>{{ movie?.Title }}</h4>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  height: 150px;
}
ul li img {
  width: 50px;
}
</style>
