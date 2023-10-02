<script lang="ts">
// console.log('looping')

export default {
  data() {
    return {
      username: '',
      gender: '',
    }
  },
}
</script>

<template>
  <div>
    <input type="text" placeholder="usename" v-model="username" />
  </div>

  <div>
    <label for="">Gender</label>
    <input type="radio" value="pria" v-model="gender" />Pria
    <input type="radio" value="Wanita" v-model="gender" />Wanita
  </div>

  <div>
    <p>username : {{ username }}</p>
    <p>gender : {{ gender }}</p>
  </div>
</template>
