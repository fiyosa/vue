<script setup lang="ts">
  import storePinia from '../../store-pinia'

  const count = storePinia.count()
  const toggle = storePinia.toggle()

  const increment = () => {
    count.set(count.get + 1)
  }
  const decrement = () => {
    count.set(count.get - 1)
  }
  const startCount = () => {
    count.set(10)
  }
  const reset = () => {
    count.$reset()
  }
  const setTrue = () => {
    toggle.set(true)
  }
  const setFalse = () => {
    toggle.set(false)
  }
  const setInit = () => {
    toggle.$reset()
  }
</script>

<template>
  <div style="display: flex; gap: 10px">
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
    <button @click="startCount()">Start 10</button>
    <button @click="reset()">Reset</button>
  </div>

  <br />

  <div style="display: flex; gap: 10px">
    <button @click="setTrue()">true</button>
    <button @click="setFalse()">false</button>
    <button @click="setInit()">reset</button>
  </div>
</template>
