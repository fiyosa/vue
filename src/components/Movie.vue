<script lang="ts">
import { store } from '../vuex/store'

export default {
  computed: {
    movies() {
      return store.state.movies
    },
  },
}
</script>

<template>
  <ul v-for="movie in movies">
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
