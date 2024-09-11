<script setup lang="ts">
  import { countProv, toggleProv } from '../../provide'
  import { inject } from 'vue'

  const count = inject(countProv.key, countProv.value)
  const toggle = inject(toggleProv.key, toggleProv.value)

  const increment = () => {
    count.set({ count: count.get.value.count + 1 })
  }
  const decrement = () => {
    count.set({ count: count.get.value.count - 1 })
  }
  const startCount = () => {
    count.set({ count: 10 })
  }
  const reset = () => {
    count.init()
  }
  const setTrue = () => {
    toggle.set({ toggle: true })
  }
  const setFalse = () => {
    toggle.set({ toggle: false })
  }
  const setInit = () => {
    toggle.init()
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
    <button @click="setInit()">init</button>
  </div>
</template>
