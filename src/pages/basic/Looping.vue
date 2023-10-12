<script setup lang="ts">
import { ref } from 'vue'

const fruits = ref(['apple', 'orange', 'lemon', 'papaya'])

const hapus = (index: number) => {
  fruits.value.splice(index, 1)
}
</script>

<template>
  <div v-for="angka in 5">{{ angka }}</div>

  <br />

  <div v-for="fruit in fruits">{{ fruit }}</div>

  <br />

  <ul v-for="(fruit, index) in fruits">
    <li>{{ fruit }} {{ index }} <button @click="hapus(index)">X</button></li>
  </ul>
</template>
