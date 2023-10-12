import { createStore } from 'vuex'
import { counterStoreAction, counterStoreState } from './counterStore'
import { movieStoreAction, movieStoreState } from './movieStore'

const states = {
  ...counterStoreState,
  ...movieStoreState,
}
const actions = {
  ...counterStoreAction,
  ...movieStoreAction,
}

export const store = createStore({ state: () => states, actions })

export const action = (e: keyof typeof actions) => e
