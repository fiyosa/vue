<script lang="ts">
export default {
  data() {
    return {
      message: 'hello world',
      tampil: false,
      nilai: 7,
      stateLampu: true,
    }
  },
  methods: {
    saklar() {
      this.stateLampu = !this.stateLampu
    },
  },
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
