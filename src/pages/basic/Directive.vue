<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      message: 'hello world',
      message2: '<strong>Ini tulisan BOLD</strong>',
    }
  },
}
</script>

<template>
  <div>{{ count }}</div>

  <div v-text="message"></div>

  <div v-html="message2"></div>
</template>
