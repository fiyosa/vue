<script setup lang="ts">
import { computed, ref } from 'vue'

const firstName = ref('')
const middlename = ref('')
const lastName = ref('')

const fullName = computed(() => firstName.value + ' ' + middlename.value + ' ' + lastName.value)
</script>

<template>
  <form>
    <input type="text" placeholder="first name" v-model="firstName" /><br />
    <input type="text" placeholder="middle name" v-model="middlename" /><br />
    <input type="text" placeholder="last name" v-model="lastName" /><br />
  </form>

  <br />

  <div>Full Name : {{ firstName }} {{ middlename }} {{ lastName }}</div>
  <div>Full Name : {{ fullName }}</div>
</template>
