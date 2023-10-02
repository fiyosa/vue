<script lang="ts">
export default {
  props: {
    name: String,
  },
  emits: ['response'],
  methods: {
    showData() {
      this.$emit('response', this.name)
    },
  },
}
</script>

<template>
  <slot>Ini adalah slot</slot> <br />
  Ini adalah data dari {{ name }} <button @click="showData">Show Detail</button> <br />
</template>
