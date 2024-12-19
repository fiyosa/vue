import { defineStore } from 'pinia'

export const count = defineStore('count', {
  state: () => ({ get: 0 }),
  actions: {
    set(e: number) {
      this.get = e
    },
  },
})
