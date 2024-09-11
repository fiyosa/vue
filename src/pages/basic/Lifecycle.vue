<script setup lang="ts">
  import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
  import { logInfo } from '../../config/helper'

  const count = ref(0)
  const inputan = ref<HTMLInputElement | null>(null)
  const hitungan = ref<HTMLInputElement | null>(null)

  onBeforeMount(() => {
    logInfo('beforeMount:', inputan.value?.value)
  })

  onMounted(() => {
    logInfo('mounted:', inputan.value?.value)
  })

  onBeforeUpdate(() => {
    logInfo('beforeUpdate:')
  })

  onUpdated(() => {
    logInfo('updated:', hitungan.value?.value)
  })
</script>

<template>
  <input type="text" value="whatever" ref="inputan" />

  <br /><br />

  <input type="text" :value="count" ref="hitungan" />
  <button @click="count++">Add</button>
</template>
