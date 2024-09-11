<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)
  const message = ref('hello world')
  const message2 = ref('<strong>Ini tulisan BOLD</strong>')
</script>

<template>
  <div>{{ count }}</div>

  <div v-text="message"></div>

  <div v-html="message2"></div>
</template>
