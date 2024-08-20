<script lang="ts">
import { logInfo } from '../../config/helper'

export default {
  data() {
    return {
      message: '',
      message2: '',
    }
  },
  watch: {
    message() {
      logInfo('test')
    },
    message2(current: string, previous: string) {
      logInfo({ current, previous })
    },
  },
}
</script>

<template>
  <input type="text" v-model="message" />
  <br /><br />
  <input type="text" v-model="message2" />
</template>
