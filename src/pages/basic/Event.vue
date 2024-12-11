<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)
  const count2 = ref(0)
  const count3 = ref(0)

  const plus = () => {
    count3.value++
  }

  const min = () => {
    count3.value--
  }

  const sayHello = (data: string) => {
    alert(data)
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault()

    if (!(event.currentTarget instanceof HTMLFormElement)) {
      return
    }

    const data = new FormData(event.currentTarget)
    console.log(data.get('username'))
  }
</script>

<template>
  <button v-on:click="count--">-</button>
  <span>{{ count }}</span>
  <button v-on:click="count++">+</button>

  <br /><br />

  <button @click="count2--">-</button>
  <span>{{ count2 }}</span>
  <button @click="count2++">+</button>

  <br /><br />

  <button @click="plus">-</button>
  <span>{{ count3 }}</span>
  <button @click="min">+</button>

  <br /><br />

  <button @click="sayHello('hello')">Say hello</button>

  <br /><br />

  <input type="text" v-on:keydown.enter="sayHello('oke')" />
  <br />
  <input type="text" @keydown.enter="sayHello('mantap')" />

  <br /><br />

  <form @submit="handleSubmit">
    <input type="text" name="username" />
    <input type="submit" value="send" />
  </form>
</template>
