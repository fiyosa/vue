<script setup lang="ts">
  import { ref } from 'vue'
  import { logInfo } from '../../config/helper'

  const username = ref('')
  const gender = ref('')

  const old = ref('')
  const msg1 = ref('')
  const msg2 = ref('')
  const msg3 = ref('')

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement
    logInfo('DEBUG', target.value)
    if (/^[0-9]*$/.test(target.value)) {
      old.value = target.value
    } else target.value = old.value
  }
</script>

<template>
  <div>
    <input v-model="username" type="text" placeholder="username" />
  </div>

  <div>
    <label for="">Gender</label>
    <input v-model="gender" type="radio" value="pria" />Pria
    <input v-model="gender" type="radio" value="Wanita" />Wanita
  </div>

  <div>
    <p>username : {{ username }}</p>
    <p>gender : {{ gender }}</p>
  </div>

  <br /><br />

  <div>
    <input type="text" placeholder="old" :value="old" @input="handleInput" />
  </div>
  <div>
    <input type="text" placeholder="v-model.trim" v-model.trim="msg1" />
  </div>
  <div>
    <input type="text" placeholder="v-model.number" v-model.number="msg2" />
  </div>
  <div>
    <input type="text" placeholder="v-model.lazy" v-model.lazy="msg3" />
    <p>{{ msg3 }}</p>
  </div>
</template>
