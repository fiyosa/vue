import { Ref, ref } from 'vue'

interface IGet {
  toggle: boolean
}

const init: IGet = {
  toggle: false,
}

const set = (e: IGet) => {
  get.value = e
}

const get: Ref<IGet> = ref(init)
export const toggleProv = { key: 'toggleProv', value: { get, set, init: () => (get.value = init) } }
