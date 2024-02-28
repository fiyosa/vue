<script setup lang="ts">
import { computed, inject } from 'vue'
import { store } from '../store/store'
import { countProvide, toggleProvide } from '../provide'

const count = computed(() => store.state.count)
const countByProvide = inject<typeof countProvide.value>(countProvide.key, countProvide.value)
const toggleByProvide = inject<typeof toggleProvide.value>(toggleProvide.key, toggleProvide.value)
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
    <RouterLink to="/provide-inject">Provide/Inject</RouterLink>
  </div>
  <div>
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/user">User</RouterLink>
  </div>
  <div>VueX count : {{ count }}</div>
  <div>Provide count : {{ countByProvide.get.value.count }}</div>
  <div>Provide count : {{ toggleByProvide.get.value.toggle }}</div>
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
