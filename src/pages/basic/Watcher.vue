<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { logInfo } from '../../config/helper'

  const message = ref('')
  const message2 = ref('')

  watch(message, (curr, prev) => {
    logInfo({ curr, prev })
  })

  watch(message2, (curr, prev) => {
    logInfo({ curr, prev })
  })
</script>

<template>
  <input type="text" v-model="message" />
  <br /><br />
  <input type="text" v-model="message2" />
</template>
