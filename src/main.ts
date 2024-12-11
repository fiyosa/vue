import { createApp } from 'vue'
import App from './App.vue'
import path from './pages/path'
import { store } from './store/store'
import { provider } from './provide'

createApp(App).use(path).use(provider).use(store).mount('#app')
