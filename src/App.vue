<script setup lang="ts">
import { provide } from 'vue'
import Navbar from './components/Navbar.vue'
import secret from './config/secret'
import { countProvide, toggleProvide } from './provide'

provide(toggleProvide.key, toggleProvide.value)
provide(countProvide.key, countProvide.value)

console.log(secret)
</script>

<template>
  <div class="menu">
    <Navbar />
  </div>

  <div class="main">
    <RouterView />
  </div>
</template>

<!-- style global -->
<style>
body {
  margin: 0;
}

body a {
  text-decoration: none;
}
</style>

<!-- style only this file  -->
<style scoped>
.menu {
  background-color: #eee;
  line-height: 2.5;
  padding: 10px;
}

.main {
  padding: 10px;
}
</style>
