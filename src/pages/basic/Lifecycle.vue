<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello World',
      count: 0,
    }
  },
  beforeCreate() {
    console.log('beforeCreate:', this.message)
  },
  created() {
    console.log('created:', this.message)
  },
  beforeMount() {
    console.log('beforeMount:', this.$refs.inputan?.value)
  },
  mounted() {
    console.log('mounted:', this.$refs.inputan?.value)
  },
  beforeUpdate() {
    console.log('beforeUpdate:', this.$refs.hitungan?.value)
  },
  updated() {
    console.log('updated:', this.$refs.hitungan?.value)
  },
}
</script>

<template>
  <input type="text" value="whatever" ref="inputan" />

  <br /><br />

  <input type="text" :value="count" ref="hitungan" />
  <button @click="count++">Add</button>
</template>
