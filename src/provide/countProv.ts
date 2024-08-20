import { Ref, ref } from 'vue'

interface IGet {
  count: number
}

const init: IGet = {
  count: 0,
}

const set = (e: IGet) => {
  get.value = e
}

const get: Ref<IGet> = ref(init)

export default {
  key: 'countProv',
  value: { get, set, init: () => (get.value = init) },
}
