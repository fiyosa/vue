<script setup lang="ts">
  import { ref } from 'vue'

  const message = ref('hello world')
  const tampil = ref(false)
  const nilai = ref(7)
  const stateLampu = ref(true)

  const saklar = () => {
    stateLampu.value = !stateLampu.value
  }
</script>

<template>
  <span v-if="tampil === true">{{ message }}</span>
  <span v-else>Message tidak ditemukan</span>

  <br /><br />

  <span v-if="nilai > 8">Predikat A</span>
  <span v-else-if="nilai < 8 && nilai > 6">Predikat B</span>
  <span v-else>Predikat C</span>

  <br /><br />

  <button @click="saklar">Saklar Lampu</button>
  <div v-show="stateLampu">Lampu Hidup</div>
</template>
