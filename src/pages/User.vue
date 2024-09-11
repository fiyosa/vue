<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const users = [
    { params: 'meg', name: 'Meg' },
    { params: 'ben', name: 'Ben' },
    { params: 'greg', name: 'Greg' },
  ]
</script>

<template>
  <h1>User Page</h1>
  <h2>List User</h2>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      <RouterLink :to="{ name: 'User', params: { id: user.params }, query: { data: route.params.id } }">{{
        user.name
      }}</RouterLink>
    </li>
  </ul>
</template>
