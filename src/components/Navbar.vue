<script setup lang="ts">
import { computed } from 'vue'
import { store } from '../store/store'

const count = computed(() => store.state.count)
</script>

<template>
  <div>
    <RouterLink to="/directive">Directive</RouterLink>
    <RouterLink to="/conditional">Conditional</RouterLink>
    <RouterLink to="/looping">Looping</RouterLink>
    <RouterLink to="/event">Event</RouterLink>
    <RouterLink to="/v-model">VModel</RouterLink>
    <RouterLink to="/computed">Computed</RouterLink>
    <RouterLink to="/watcher">Watcher</RouterLink>
    <RouterLink to="/lifecycle">Lifecycle</RouterLink>
    <RouterLink to="/props">Props</RouterLink>
    <RouterLink to="/vuex">VueX</RouterLink>
  </div>
  <div>
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/user">User</RouterLink>
  </div>
  <div>VueX count : {{ count }}</div>
</template>

<style scoped>
a {
  margin-right: 10px;
  text-decoration: none;
  color: rgb(67, 67, 233);
}

a:hover {
  color: red;
}
</style>
../store/store
