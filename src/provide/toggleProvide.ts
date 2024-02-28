/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ref, ref } from 'vue'

interface IGet {
  toggle: boolean
}

const init: IGet = {
  toggle: false,
}

const set = (e: IGet) => {
  get.value = {
    ...get.value,
    toggle: e.toggle,
  }
}

const get: Ref<IGet> = ref(init)

export default {
  key: 'switchProvide',
  value: { get, set, init: () => (get.value = init) },
}
