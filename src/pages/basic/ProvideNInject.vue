<script setup lang="ts">
import { countProvide, toggleProvide } from '../../provide'
import { inject } from 'vue'

const countByProvide = inject<typeof countProvide.value>(countProvide.key, countProvide.value)
const toggleByProvide = inject<typeof toggleProvide.value>(toggleProvide.key, toggleProvide.value)

const increment = () => {
  countByProvide.set({ count: countByProvide.get.value.count + 1 })
}
const decrement = () => {
  countByProvide.set({ count: countByProvide.get.value.count - 1 })
}
const startCount = () => {
  countByProvide.set({ count: 10 })
}
const reset = () => {
  countByProvide.init()
}
const setTrue = () => {
  toggleByProvide.set({ toggle: true })
}
const setFalse = () => {
  toggleByProvide.set({ toggle: false })
}
const setInit = () => {
  toggleByProvide.init()
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
