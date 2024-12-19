import { defineStore } from 'pinia'

export const toggle = defineStore('toggle', {
  state: () => ({ get: false }),
  actions: {
    set(e: boolean) {
      this.get = e
    },
  },
})
