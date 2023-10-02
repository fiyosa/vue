<script lang="ts">
export default {
  data() {
    return {
      message: '',
      message2: '',
    }
  },
  watch: {
    message() {
      console.log('test')
    },
    message2(current: string, previous: string) {
      console.log({ current, previous })
    },
  },
}
</script>

<template>
  <input type="text" v-model="message" />
  <br /><br />
  <input type="text" v-model="message2" />
</template>
