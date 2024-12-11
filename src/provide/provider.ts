import { App, Plugin } from 'vue'
import { toggleProv } from './toggleProv'
import { countProv } from './countProv'

export const provider: Plugin = {
  install(app: App) {
    app.provide(toggleProv.key, toggleProv.value)
    app.provide(countProv.key, countProv.value)
  },
}
