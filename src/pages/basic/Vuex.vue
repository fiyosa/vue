<script lang="ts">
import { action, store } from '../../vuex/store'
import Movie from '../../components/Movie.vue'

export default {
  components: {
    Movie,
  },
  methods: {
    increment() {
      store.dispatch(action('increment'))
    },
    decrement() {
      store.dispatch(action('decrement'))
    },
    startCount() {
      store.dispatch(action('startCount'), 10)
    },
    reset() {
      store.dispatch(action('reset'))
    },
    previous() {
      store.dispatch(action('previous'))
    },
    next() {
      store.dispatch(action('next'))
    },
  },
  beforeCreate: async () => {
    await store.dispatch(action('previous'))
  },
}
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
