<script setup lang="ts">
  import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'

  const count = ref(0)
  const inputan = ref<HTMLInputElement | null>(null)
  const hitungan = ref<HTMLInputElement | null>(null)

  onBeforeMount(() => {
    console.log('beforeMount:', inputan.value?.value)
  })

  onMounted(() => {
    console.log('mounted:', inputan.value?.value)
  })

  onBeforeUpdate(() => {
    console.log('beforeUpdate:')
  })

  onUpdated(() => {
    console.log('updated:', hitungan.value?.value)
  })
</script>

<template>
  <input type="text" value="whatever" ref="inputan" />

  <br /><br />

  <input type="text" :value="count" ref="hitungan" />
  <button @click="count++">Add</button>
</template>
