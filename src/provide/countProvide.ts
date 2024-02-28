/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ref, ref } from 'vue'

interface IGet {
  count: number
}

const init: IGet = {
  count: 0,
}

const set = (e: IGet) => {
  get.value = {
    ...get.value,
    count: e.count,
  }
}

const get: Ref<IGet> = ref(init)

export default {
  key: 'countProvide',
  value: { get, set, init: () => (get.value = init) },
}
