<script lang="ts">
  export default {}
</script>

<template>
  ini halaman user detail {{ $route.params.name }}
  <br />
  <RouterLink :to="'/user/' + $route.params.name + '/posts'">{{ $route.params.name }}'s Posts</RouterLink>
  <br />
  <RouterLink :to="'/user/' + $route.params.name + '/profile'">{{ $route.params.name }}'s Profile</RouterLink>
</template>
