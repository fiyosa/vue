import { ActionContext } from 'vuex'

type IState = typeof counterStoreState
type IContex = ActionContext<IState, IState>

export const counterStoreState = {
  count: 0,
}

export const counterStoreAction = {
  increment(contex: IContex) {
    contex.state.count++
  },
  decrement(contex: IContex) {
    contex.state.count--
  },
  startCount(contex: IContex, data: number) {
    contex.state.count = data
  },
  reset(contex: IContex) {
    contex.state.count = 0
  },
}
