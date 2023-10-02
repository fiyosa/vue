<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      count2: 0,
      count3: 0,
    }
  },
  methods: {
    plus() {
      this.count3++
    },
    min() {
      this.count3--
    },
    sayHello(data: string) {
      alert(data)
    },
    handleSubmit(event: Event) {
      event.preventDefault()

      if (!(event.currentTarget instanceof HTMLFormElement)) return

      const data = new FormData(event.currentTarget)
      console.log(data.get('username'))
    },
  },
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
