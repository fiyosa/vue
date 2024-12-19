<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { store } from '../store/store'
  import { countProv, toggleProv } from '../provide'
  import { useRouter } from 'vue-router'
  import storePinia from '../store-pinia'

  const router = useRouter()

  const count = computed(() => store.state.count)
  const countByProvide = inject(countProv.key, countProv.value)
  const toggleByProvide = inject(toggleProv.key, toggleProv.value)

  const countPinia = storePinia.count()
  const togglePinia = storePinia.toggle()
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
    <RouterLink to="/pinia">Pinia</RouterLink>
  </div>
  <div>
    <button @click="() => router.push({ name: 'Dashboard' })">Dashboard</button>
    <button @click="() => router.push({ name: 'About' })">About</button>
    <button @click="() => router.push({ name: 'User', params: { id: 'testing' } })">User</button>
  </div>
  <div>VueX count : {{ count }}</div>
  <hr />
  <div>Provide count : {{ countByProvide.get.value.count }}</div>
  <div>Provide toggle : {{ toggleByProvide.get.value.toggle }}</div>
  <hr />
  <div>Pinia count : {{ countPinia.get }}</div>
  <div>Pinia toggle : {{ togglePinia.get }}</div>
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
