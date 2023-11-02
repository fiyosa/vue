<script setup lang="ts">
import { ref } from 'vue'

const fruits = ref(['apple', 'orange', 'lemon', 'papaya'])

const hapus = (index: number) => {
  fruits.value.splice(index, 1)
}
</script>

<template>
  <div v-for="(angka, index) in 5" :key="index">{{ angka }}</div>

  <br />

  <div v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</div>

  <br />

  <ul v-for="(fruit, index) in fruits" :key="index">
    <li>{{ fruit }} {{ index }} <button @click="hapus(index)">X</button></li>
  </ul>
</template>
