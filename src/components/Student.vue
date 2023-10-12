<script setup lang="ts">
const props = defineProps({
  name: String,
})

const emits = defineEmits({
  response: String,
})

const showData = () => {
  emits('response', props.name ?? '???')
}
</script>

<template>
  <slot>Ini adalah slot</slot> <br />
  Ini adalah data dari {{ props.name }} <button @click="showData">Show Detail</button> <br />
</template>
