<script setup lang="ts">
  import Student from '../../components/Student.vue'
</script>

<template>
  <Student name="hello world" @response="(event: string) => console.log(event)">
    Ini adalah nilai slot dari parent
  </Student>
</template>
