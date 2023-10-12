<script setup lang="ts">
import { action, store } from '../../store/store'
import Movie from '../../components/Movie.vue'
import { onBeforeMount } from 'vue'

const increment = () => {
  store.dispatch(action('increment'))
}
const decrement = () => {
  store.dispatch(action('decrement'))
}
const startCount = () => {
  store.dispatch(action('startCount'), 10)
}
const reset = () => {
  store.dispatch(action('reset'))
}
const previous = () => {
  store.dispatch(action('previous'))
}
const next = () => {
  store.dispatch(action('next'))
}

onBeforeMount(() => {
  store.dispatch(action('previous'))
})
</script>

<template>
  <div style="display: flex; gap: 10px">
    <button @click="decrement()">Decrement</button>
    <button @click="increment()">Increment</button>
    <button @click="startCount()">Start 10</button>
    <button @click="reset()">Reset</button>
  </div>
  <br />
  <div style="display: flex; gap: 10px">
    <button @click="previous()">Previous</button>
    <button @click="next()">Next</button>
  </div>

  <Movie />
</template>
../../store/store
