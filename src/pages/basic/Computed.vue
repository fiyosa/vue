<script lang="ts">
export default {
  data() {
    return {
      firstName: '',
      middlename: '',
      lastName: '',
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.middlename + ' ' + this.lastName
    },
  },
}
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
