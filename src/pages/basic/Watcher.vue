<script setup lang="ts">
  import { ref, watch } from 'vue'

  const message = ref('')
  const message2 = ref('')

  watch(message, (curr, prev) => {
    console.log({ curr, prev })
  })

  watch(message2, (curr, prev) => {
    console.log({ curr, prev })
  })
</script>

<template>
  <input type="text" v-model="message" />
  <br /><br />
  <input type="text" v-model="message2" />
</template>
